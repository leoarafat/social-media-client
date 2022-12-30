import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import TopPostCard from "./TopPostCard";

const TopPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/topPost")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
 

  console.log(posts);

  return (
    <div>
      {posts.length ? (
        <p className="text-center text-3xl shadow-sm p-3">Most liked posts</p>
      ) : (
        ""
      )}
      {posts?.map((post) => (
        <TopPostCard post={post} />
      ))}
    </div>
  );
};

export default TopPost;
