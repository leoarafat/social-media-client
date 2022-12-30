import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import AwesomeLoader from "../../components/SocialAnimation/AwesomeLoader";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PostSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = "8b90eb0929bfebb0ad08213a1dc74625";

  const handlePost = (data) => {
    setIsLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const addPost = {
            description: data.post,
            image_url: imgData.data.url,
            time: new Date(),
            like: 0,
        
          };

          fetch("http://localhost:5000/addPost", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addPost),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                console.log("success");

                navigate("/media");
                toast.success("Product added successfully");
                setIsLoading(false);
              }
            });
        }
      });
  };

  if (isLoading) {
    return <AwesomeLoader/>
  }
  return (
    <div class="max-w-4xl p-6 mx-auto bg-slate-200 rounded-md shadow-md dark:bg-gray-100 mt-12 mb-12">
      <form onSubmit={handleSubmit(handlePost)}>
        <div class="flex items-center justify-center flex-col">
          <div className="flex flex-col items-center w-full">
            <label htmlFor="message" className=" dark:text-gray-400">
              Add a post
            </label>
            <textarea
              {...register("post", { required: "message is Required" })}
              name="post"
              placeholder="Hey, I am a web developer..."
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>

          <div className="flex flex-col items-center w-full">
            <label htmlFor="img" className=" dark:text-gray-400">
              Add Image
            </label>
            <input
              {...register("image", {
                required: true,
              })}
              type="file"
              name="image"
              id="image"
              accept="image/*"
              placeholder="Enter Your img"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
            />
          </div>
          {user?.uid ? (
            <>
              <input
                className="btn btn-secondary w-[450px] rounded-none py-2 px-8 mt-6 text-gray-100"
                value="Post"
                type="submit"
              />
            </>
          ) : (
            <p className="text-lg text-red-600 mt-2">
              If you want to post please{" "}
              <span className="text-2xl text-purple-800">
                <Link to="/login">login first</Link>
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostSection;
