import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

function SingleArticle() {
  const { blog_id } = useParams();
  const [blogDetails, setBlogDetails] = React.useState({});

  useEffect(() => {
    getData(`https://reqres.in/api/blog/${blog_id}`).then((res) => {
      setBlogDetails(res.data);
    });
  }, [blog_id]);

  return (
    <>
        <h1 class="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Product Page</h1>
      <br />
      <br />
      <p class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Name : {blogDetails.name}</p>
      <p class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Color : {blogDetails.color}</p>
      <p class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"> pantone_value : {blogDetails.pantone_value}</p>

      <Link  className="hover:underline text-blue-600 
                   hover:text-blue-800 
                   visited:text-blue-700" to="/blog">Blog Page</Link>
      <br />
      <br />
      <Link  className="hover:underline text-blue-600 
                   hover:text-blue-800 
                   visited:text-blue-700" to="/">Home Page</Link>
    </>
  );
}

export default SingleArticle;
