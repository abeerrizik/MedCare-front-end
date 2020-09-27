import React from "react";

import "./App.css";
import Home from "./pages/home";
import PatientDetials from "./pages/PatientDetails";
import PatientMedication from "./pages/PatientMedications";
import MedicationDetailsId from "./pages/PatientMedicationId";
import PatientReport from "./pages/PatientReport";
import Askadoc from "./pages/Askadoc";
import Register from "./pages/register";
import PatientList from "./pages/patientList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/patient/details">
            <PatientDetials />
          </Route>
          <Route path="/patient/medications" exact>
            <PatientMedication />
          </Route>
          <Route path="/patient/medications/id">
            <MedicationDetailsId />
          </Route>
          <Route path="/patient/report">
            <PatientReport />
          </Route>
          <Route path="/patient/askadoc">
            <Askadoc />
          </Route>
          <Route path="/doctor/register">
            <Register />
          </Route>
          <Route path="/doctor/patientList">
            <PatientList />
          </Route>
        </Switch>
      </Router>
      {window.location.pathname !== "/" ? (
        <footer>
          <div className="bottomnav">
            <a href="/patient/details">
              <img className="homeicon" src="/homeicon.svg"></img>
            </a>
            <a href="/patient/medications">
              <img className="capsule" src="/capsule.svg"></img>
            </a>
            <a href="/">
              {" "}
              <img className="logout" src="/logouticon.svg"></img>
            </a>
          </div>
        </footer>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
