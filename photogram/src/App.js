// import logo from './logo.svg';
import './App.css';
import { Header } from './MyComponents/Header';
import { Posts } from './MyComponents/Posts';
// import {PostItem} from './MyComponents/PostItem';
import { AddPost } from './MyComponents/AddPost';
import { useState, useEffect } from 'react';
import { Settings } from "./MyComponents/Settings";
import { SignUp } from './MyComponents/SignUp';
import { LogIn } from './MyComponents/LogIn';
import axios from 'axios'


import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
let myPost= []
let getData = []
let checkPost= []

// console.log(post)
// getPost()
// console.log("Here all the posts")
// console.log(getData);
// console.log("Here is check post");
// console.log(checkPost);





//Adding a Post
const addPost = (PostImage, PostDesc) => {
  // let sno;
  
  //   if (post.length === 1) {
    //     sno = 1;
    //   }
    //   else {
      //     sno = post[post.length - 1].sno + 1;
      //   }
    
  //   const myPost = {
    //     sno: sno,
    //     img: PostImage,
    //     desc: PostDesc
    //   }
    //   setpost([...post, myPost]);
  }
  // const [post, setpost] = useState(myPost)
  const onDelete = (postItem) => {
    // setpost(post.filter((e) => {
      //   return e !== postItem;
      // }))
      // console.log(posts)
    }
    
    // post[0] = {
      //   sno: 0
      // }
      const [post, setpost] = useState([])
      useEffect(() => {
        // setpost([])
      let url = 'http://127.0.0.1:8000/check/post/'
      axios.get(url, {
      }).then(function(res){ 
        setpost(res.data)
        // console.log(res.data);
        // console.log(res.data.length);
        res.data.forEach(element => {
          
          // console.log("here is insiede kahjdka ");
          // console.log(element['post_id'])
    
          const getPost= {
            sno: element['post_id'],
            desc: element['post_desc'],
            img: element['post_img'] 
          }
          getData.push(getPost)
          // checkPost= [...checkPost, getData]
          // console.log("here is the object get post")
          // console.log(getPost);
          // setpost([...post, getData])
        });
    }   )  
    // console.log(getData)
    // setpost(getData)
    // console.log("Here is post");
    // console.log(5+5);
  }, []);

  return (
    <>
    <Router>
    <Header />
      <Switch>
        <Route exact path='/settings' render={()=>{
          return <Settings />
        }}>
          </Route>
          {/* <Settings /> */}
          <Route exact path={'/addPost'} render= {()=>{
            return <AddPost addPost={addPost} />
          }}>
            
          
    {/* // <AddPost addPost={addPost} />  */}

        </Route>
        <Route exact path ='/signup' render ={()=>{
          return <SignUp />
        }}>
        </Route>
        <Route exact path ='/login' render ={()=>{
          return <LogIn />
        }}>
        </Route>

      </Switch>
    <Posts posts={post} onDelete={onDelete} />
    </Router>


       {/* <Router>
        <Header />
        <Switch>
          <Route exact path='/settings'
            render={() => {
              return <Settings />
            }}
          >

          </Route>



          <Route exact path='/addPost' render={() => {
            return (
              <>

                <AddPost addPost={addPost} />

              </>
            )
            
          }} >
          </Route>
        </Switch>
            <Posts posts={post} onDelete={onDelete} />
      </Router> */}
    </>
  );
}

export default App;
