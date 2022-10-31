import {useState, useEffect, SetStateAction} from 'react'
import axios from "axios"
import "./index.css"
import ReactPaginate from 'react-paginate'; 

const API = "http://18.192.182.140/api/articles";



const Post = () => {

  const [currentPage, setcurrentPage] = useState(0)
  const [pageCount, setPageCount] = useState(6)
  const [blogs, setBlogs] = useState<any[]>([])


    useEffect(() => {
      axios.get(API).then((response) => {
        console.log(response.data)
        setBlogs(response.data.data);
      });
    }, []);

      return ( 
        <>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog__item">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p className='cat_id'>{blog.category_id}</p>
          </div>
        ))}
        </>
)
        }
export default Post;


