import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Post from "../blog-item/Post";
import ReactPaginate from "react-paginate";

export const API = "http://18.192.182.140/api/articles";

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(6);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios.get(API).then((response) => {
      setBlogs(response.data.data);
      setPageCount(response.data.last_page);
    });
  }, []);

  const fetchPages = async (pageId: any) => {
    const res = await fetch(
      `http://18.192.182.140/api/articles?page=${pageId}`
    );
    const response = await res.json();
    return response;
  };

  const handlePageClick = async (data: any) => {
    let currentPage = data.selected + 1;

    const pages = await fetchPages(currentPage);
    console.log(pages);
    setItems(pages);
    setBlogs(pages.data);
  };

  return (
    <>
      <div className="blog_posts">
        <div className="blogs">
          {blogs.map((blog) => (
            <Post {...blog} key={blog.id} />
          ))}
        </div>
        <div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            pageRangeDisplayed={5}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            previousLabel="< previous"
            containerClassName={"container"}
            previousLinkClassName={"page"}
            breakClassName={"page"}
            nextLinkClassName={"page"}
            pageClassName={"page"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
