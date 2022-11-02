import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import "./index.css";
import ReactPaginate from "react-paginate";
import { API } from "../../components/BlogList/Blog";
import { Link } from "react-router-dom";

const AdminPage = () => {
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
    setItems(pages);
    setBlogs(pages.data);
  };

  const handleDelete = async (id: any) => {
    await axios
      .delete(`http://18.192.182.140/api/articles`)
      .then((res) => alert("hello"));
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
          <div className="admin__content">
            <div className="create__btn">
              <Link to="/create" className="edit__btn">
                CREATE NEW +
              </Link>
            </div>
            <div className="admin__posts">
              {blogs.map((blog) => (
                <div key={blog.id} className="admin__post">
                  <div className="admin__info">
                    <p className="id_numb">id: {blog.id}</p>
                    <h2>{blog.title}</h2>
                    <span className="id_cat">
                      category id: {blog.category_id}
                    </span>
                  </div>
                  <div className="btns">
                    <Link to="/edit" className="edit__btn">
                      EDIT
                    </Link>
                    <button
                      className="delete__btn"
                      onClick={() => handleDelete(blog.id)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
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
        </Box>
      </Container>
    </>
  );
};

export default AdminPage;
