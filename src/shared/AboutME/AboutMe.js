import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import AboutDetails from "./AboutDetails";
import AboutModal from "./AboutModal";

const AboutMe = () => {
  const [users, setUsers] = useState([]);
  const [userAbout, setAboutUser] = useState(null)
  console.log(users)
  
const {user} = useContext(AuthContext)
  useEffect(() => {
    fetch(
      `http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [user?.email]);

  return (
    <div className="mb-[40vh]">
      {
        users.map(user => <AboutDetails setAboutUser={setAboutUser} user={user}/> )
      }
      {
        userAbout && <AboutModal userAbout={userAbout}/>
      }
    </div>
  );
};

export default AboutMe;
