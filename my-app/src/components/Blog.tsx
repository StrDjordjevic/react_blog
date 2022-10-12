import axios from "axios"
import {useState,useEffect} from 'react'

const Blog = () => {
const API = "http://18.192.182.140/api/articles"
const [req,setReq] = useState()
const [items,setITems] = useState([])

  return (
    <div>BlogPosts</div>
  )
}

export default Blog