import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setError("");
        setPost(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong ...");
        setPost({});
      });
  }, []);

  return (
    <div>
      {loading ? <h3>Loading</h3> : <h3>{post.title}</h3>}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
// Data Fetching using useEffect and useState
