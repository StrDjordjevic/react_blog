import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import "./index.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { token } from "../../../components/BlogList/Blog";
import { getCategories } from "../../../components/CategoriesApi";

const catApi = "http://18.192.182.140/api/categories";

const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState(6);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetchCategories();
    fetchPages(null);
  }, []);

  const fetchCategories = async () => {
    try {
      await getCategories().then(({ data }: any) => {
        setCategories(data.data);
        console.log(data.data);
      });
    } catch (err) {
      console.log("Error");
    }
  };

  const fetchPages = async (pageId: any) => {
    const res = await fetch(`${catApi}?page=${pageId}`);
    const response = await res.json();
    setPageCount(response.last_page);
    return response;
  };

  //Delete blog

  const handleDelete = async (id: any) => {
    const response = await axios.delete(`${catApi}/${id}?api_token=${token}`);
    if (response.statusText === "OK") {
      window.location.reload();
    } else {
      console.log("Error");
    }
  };

  const handlePageClick = async (data: any) => {
    let currentPage = data.selected + 1;
    const pages = await fetchPages(currentPage);
    setItems(pages);
    setCategories(pages.data);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
          <div className="admin__content">
            <div className="create__btn">
              <Link to="/createCategories" className="edit__btn">
                CREATE NEW +
              </Link>
            </div>
            <div className="admin__posts">
              <div className="categories__btn">
                <Link to="/admin" className="edit__btn">
                  ADMIN
                </Link>
              </div>

              {categories.map((category) => (
                <div key={category.id} className="admin__post">
                  <div className="admin__info">
                    <span className="id_cat">category id: {category.id}</span>
                  </div>
                  <span>name: {category.name}</span>
                  <div className="btns">
                    <Link to={`/edit`} className="edit__btn">
                      EDIT
                    </Link>
                    <button
                      className="delete__btn"
                      onClick={() => {
                        handleDelete(category.id);
                      }}
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

export default Categories;
