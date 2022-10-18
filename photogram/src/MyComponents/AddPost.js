import React from 'react'
import { useState } from 'react';
import axios from 'axios';


export const AddPost = ({ addPost }) => {
 


// Post request to Django
const postPost= () =>{
 let url = 'http://127.0.0.1:8000/check/post/'
 let image= document.getElementById('PostImage')
//  let genImage= image.value
 console.log(image.target)
  let fd= new FormData()
  fd.append('post_desc', PostDesc);
  fd.append('post_img', PostImage);
  console.log(fd);

  let config= {headers: {'Content-Type': 'multipart/form-data'}}

  axios.post(url, fd, config).then(res=> console.log(res)).catch(err => console.log(err))
}





  const [PostImage, setPostImage] = useState(null)
  const [PostDesc, setPostDesc] = useState("")

  const submit = (event) => {
    event.preventDefault();
    if (!PostImage || !PostDesc) {
      alert("Add Image and Description");
    }
    else {
      addPost(PostImage, PostDesc);
      console.log(PostImage)
      setPostDesc("");
      // window.location.reload();
      setPostImage(null);
      // getPost();
      postPost();
    }
  }


  // useEffect(() => {

  // }, [PostImage])


  return (
    <>
      <form onSubmit={submit} encType="multipart/form-data" method='post' >

        <div className="form-group">
          <label htmlFor="PostImage">Add Picture</label><br />
          <input type="file" className="form-control-file " id="PostImage"
            onChange={(e) => {
              setPostImage(e.target.files[0]);


            }} onClick={(event) => {
              event.target.value = null
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="PostDesc">Post Description</label><br />
          <input type="text" onChange={(e) => {
            // e.target.value;
            setPostDesc(e.target.value)
          }} className="htmlform-control" id="PostDesc"
            value={PostDesc}
            placeholder="Enter your Description Here"

          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}
