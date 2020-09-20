import React from "react";
import "./home.css";
import { BsPersonFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Logo from "../component/logo";

const Home = function () {
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    password: "",
  });
  const [userData, setUserData] = React.useState({});
  const history = useHistory();

  const handleClick = () => {
    // getUserData(`http://localhost:4000/api/login`, "POST", userDetails)
    //   .then((data) => {
    //     setUserData(data);
    //     if (data.message === "Logged successfully") history.push("/post");
    //   })
    //   .catch(() => {});

    setUserData("abeer", "1234");
    history.push("/patient/details");
  };

  if (!userData) {
    return <h3>...Loading</h3>;
  }
  // const { message } = userData;

  return (
    <div className="card">
      <Logo />

      <p className="sign-in">Sign In</p>
      <div className="input-container">
        <input
          placeholder="Identity Number"
          type="text"
          name="Identity Number"
          value={userDetails.username}
          onChange={(e) =>
            setUserDetails({ ...userDetails, username: e.target.value })
          }
        />
        <span className="icon">
          <BsPersonFill />
        </span>
      </div>
      <div className="input-container">
        <input
          placeholder="password"
          type="password"
          name="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />
        <span className="icon">
          <FaKey />
        </span>
      </div>
      <button onClick={handleClick}>login</button>
    </div>
  );
};

export default Home;