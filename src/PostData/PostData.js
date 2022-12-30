import React, { useEffect, useState } from "react";

import PostCard from "../PostCard/PostCard";

const PostData = () => {
  const [posts, setPosts] = useState([]);
  // const { user } = useContext(AuthContext);

  // console.log(posts)

  useEffect(()=>{
      fetch('http://localhost:5000/post')
      .then(res => res.json())
      .then(data =>{
          // console.log(data)
          setPosts(data)
      })
  },[])

  
  // useEffect(() => {
  //   fetch(`http://localhost:5000/post?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //       console.log(data)
        
  //     });
  // }, [user?.email]);

  return (
    <div className="grid md:grid-cols-2 gap-3">
      {posts.length ? (
        <>
          {posts.map((post) => (
            <PostCard post={post} />
          ))}
        </>
      ) : (
        <p className="text-center text-3xl my-3">You have no post!!</p>
      )}
   
    </div>
  );
};

export default PostData;
