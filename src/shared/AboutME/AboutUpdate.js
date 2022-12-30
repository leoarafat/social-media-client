import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Fun from "../../components/FunAnimation.json";
const AboutUpdate = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);
//   console.log(storedUser);
const navigate = useNavigate()
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
            navigate('/about')
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
      <section className="p-6 bg-gray-800 text-gray-900">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
            <span className="block mb-2 text-violet-400">
              Please update your information
            </span>
            <h1 className="text-5xl font-extrabold text-gray-50 mb-2">
              {storedUser?.name}
            </h1>

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
                  defaultValue={storedUser?.name}
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
                  defaultValue={storedUser?.email}
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
                  defaultValue={storedUser?.varsity}
                  id="varsity"
                  name="varsity"
                  type="text"
                  placeholder="University name"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
              <div>
                <label for="address" className="text-sm sr-only">
                  Address
                </label>
                <input
                  onChange={handleInputChange}
                  defaultValue={storedUser?.address}
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-md focus:ring focus:ring-violet-400 border-gray-700 p-2"
                />
              </div>
<button className="btn btn-active btn-accent w-full">Submit</button>
            </form>
          </div>
          <Lottie className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" animationData={Fun}></Lottie>

        </div>
      </section>
    </div>
  );
};

export default AboutUpdate;
