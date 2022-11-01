
import "./index.css"
import ReactPaginate from 'react-paginate'; 
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";


type blogProps = {
      title:string;
      body:string;
}



const Post = (blog: blogProps) => {
      return ( 
        <>
        <div className='blog__item'>
        <h2>{blog.title}</h2>
        <h2>{blog.body}</h2>
        </div>
       

        </>
)
        }
export default Post;


