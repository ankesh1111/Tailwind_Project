import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

function Blog() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    getData(`https://reqres.in/api/blog?page=${page}`).then((res) => {
      setData(res);
    });
  }, [page]);

  useEffect(() => {
    setSearch({ page });
  }, [page]);

  return (
    <>
     
      <h1 class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Blog Page</h1>
      
      <h1 class="ma inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link   
                   to="/">Home Page</Link> </h1>
      <div>
        {data?.data?.map((blog) => (
          <div
            key={blog.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <br />
            <h3  class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{blog.name} </h3>
            <h2>{blog.pantone_value}</h2>
            <Link  className="hover:underline text-blue-600 
                   hover:text-blue-800 
                   visited:text-blue-700" to={`/blog/article${blog.id}`}>More Details</Link>
          </div>
        ))}
      </div>
      <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button class="py-1 px-5 bg-green-500  " >{page}</button>
      <button class="inline-flex text-white bg-indigo-500 border-0  py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={page === 2} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
    </>
  );
}

export default Blog;
