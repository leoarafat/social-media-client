import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const AboutModal = ({ userAbout }) => {

    const storedUser = useLoaderData();
    console.log(storedUser)
    
    const [user, setUser] = useState(storedUser);
  //   console.log(storedUser);
//   const navigate = useNavigate()
    const handleUpdate = (e) => {
      e.preventDefault();
      // console.log(user);
      fetch(`http://localhost:5000/users/${storedUser._id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
          if (data.modifiedCount > 0){
              toast.success('Successfully Update')
              // console.log(data);
            //   navigate('/about')
          }
          
      })
    };
  
    const handleInputChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newUser = { ...user };
      newUser[field] = value;
      setUser(newUser);
    };




  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="about-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="about-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
              onSubmit={handleUpdate}
              className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
            >
              <div>
                <label for="name" className="text-sm sr-only">
                  Your name
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={userAbout?.name}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <div>
                <label for="email" className="text-sm sr-only">
                  Email address
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={userAbout?.email}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-700 p-2 text-dark"
                />
              </div>
              <div>
                <label for="varsity" className="text-sm sr-only">
                  University name
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={userAbout?.varsity}
                  id="varsity"
                  name="varsity"
                  type="text"
                  placeholder="University name"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
<button className="btn">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
