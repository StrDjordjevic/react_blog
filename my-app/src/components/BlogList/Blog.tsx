import {useState, useEffect} from 'react'
import axios from "axios"
import "./index.css"
import Post from "../blog-item/Post"
import ReactPaginate from 'react-paginate';

const API = "http://18.192.182.140/api/articles";

const Blog = () => {

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
    <div className="blog_posts">
      <div className='blogs'>
             {blogs.map((blog) => (
              <Post {...blog}/>

        ))}
    </div>
    <div>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName={'container'}
				previousLinkClassName={'page'}
				breakClassName={'page'}
				nextLinkClassName={'page'}
				pageClassName={'page'}
				disabledClassName={'disabled'}
				activeClassName={'active'}
      />
    </div>
    </div>

    </>
  )
}

export default Blog;