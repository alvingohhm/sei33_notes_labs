import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Parent = () => {
  const [selection, setSelection] = useState("1");
  const [post, setPost] = useState({
    id: "",
    title: "",
    body: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url, { signal });
      if (res.status !== 200) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      setPost({
        id: data.id,
        title: data.title,
        body: data.body,
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  // const fetchPost = async (url, cancelToken) => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const res = await axios.get(url, { cancelToken }); // {cancelToken: cancelToken}
  //     if (res.status !== 200) {
  //       throw new Error("Something went wrong");
  //     }

  //     setPost({
  //       id: res.data.id,
  //       title: res.data.title,
  //       body: res.data.body,
  //     });
  //   } catch (err) {
  //     setError(err.message);
  //   }

  //   setIsLoading(false);
  // };

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  // useEffect(() => {
  //   const url = "https://jsonplaceholder.typicode.com/posts/" + selection;
  //   const controller = new AbortController();
  //   fetchPost(url, controller.signal);
  //   return () => {
  //     controller.abort();
  //   };
  // }, [selection]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts/" + selection;

    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    fetchPost(url, source);

    return () => {
      source.cancel();
    };
  }, [selection]);

  let content = "";

  if (post) {
    content = (
      <>
        <div>ID: {post.id} </div>
        <div>Title: {post.title} </div>
        <div>Body: {post.body} </div>
      </>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <section>
        <select id="selection" onChange={handleSelectionChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </section>
      {/* <selection>
        {!isLoading && (
          <>
            <div>ID: {post.id} </div>
            <div>Title: {post.title} </div>
            <div>Body: {post.body} </div>
          </>
        )}
        {isLoading && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && error && <p>{error}</p>}
      </selection> */}
      <section>{content}</section>
    </>
  );
};

export default Parent;
