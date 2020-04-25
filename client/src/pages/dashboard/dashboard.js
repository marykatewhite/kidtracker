import React, { useEffect, useState } from "react";

import fire from "../../firebase";

import Navbar from "../../components/navbar/navbar";
import StudentList from "../../components/studentlist/studentList";
import SideNav from "../../components/sidebarnav";
// import { Sidenav } from "materialize-css";
import "./style.css";

const Dashboard = () => {
  const [students, setStudents] = useState({});
  const [newStudentName, setNewStudentName] = useState("");
  const [loading, setLoading] = useState(true);

  const teacherID = localStorage.getItem("UR_APP_teacher_id");

  const clearForm = () => {
    setNewStudentName("");
  };

  const fetchStudents = () => {
    fire
      .database()
      .ref(`/teachers/${teacherID}/students/`)
      .once("value")
      .then(snapshot => {
        if (!snapshot.val()) {
          // default "dummy"
          addStudent("Zach Sadovszky");
        }
        setStudents(snapshot.val());
        setLoading(false);
      });
  };

  const addStudent = studentName => {
    const updates = {};
    const newStudentId = Date.now();
    updates[`teachers/${teacherID}/students/${newStudentId}/id`] = newStudentId;
    updates[
      `teachers/${teacherID}/students/${newStudentId}/name`
    ] = studentName;
    fire
      .database()
      .ref()
      .update(updates)
      .then(() => {
        fetchStudents();
        clearForm();
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <Navbar />
      {/* <div className="row">
        <div className="col s12 ">
          <SideNav />
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col s12">
            <section>
              <h5 className="newStudentHeader">Add a Student</h5>
              <input
                onChange={event => setNewStudentName(event.currentTarget.value)}
                value={newStudentName}
                id="newStudentInput"
              />
              <a className="waves-effect waves-light btn addStudent" onClick={() => addStudent(newStudentName)}>
                Add Student<i class="material-icons right">add</i>
              </a>
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12 studentList ">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <StudentList
                students={students}
                refreshStudentList={fetchStudents}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
