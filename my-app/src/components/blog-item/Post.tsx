import "./index.css";
import { Link } from "react-router-dom";

type blogProps = {
  title: string;
  body: string;
  id: number;
};

const Post = (blog: blogProps) => {
  return (
    <>
      <div className="blog__item" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>

        <Link to={`single_blog/${blog.id}`} className="btn">
          Read More
        </Link>
      </div>
    </>
  );
};
export default Post;
