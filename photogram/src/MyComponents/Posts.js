import React from 'react'
import { PostItem } from './PostItem';
// import EifelTower from '../static/EifelTower.jpg';

export const Posts = ({posts, onDelete }) => {
    // console.log("Ths is posts");
    let style = {
        width: "18rem",
        marginRight: "10px",
        // background: 'yellow'
    }
// console.log("This is posdjt int he post seciont of the the post sectind");
// console.log(posts);
// console.log("you just saw posts");
// setInterval(() => {
//     console.log('')
// }, 2000);
console.log({posts});
let chunked= posts
// console.log('the chunk is')


function chunking(arr, size){
    const chunk = [];
    for(let i=0; i< arr.length; i++){
        let last = chunk[chunk.length-1];
        if(!last || last.length===size){
            chunk.push([arr[i]]);
        }
        else{
            last.push(arr[i]);
        }
    };
    return chunk;
}
let ans= chunking(chunked, 3)
// console.log(ans)
// console.log('ans is')

// console.log('read chunk outer loop');
// console.log(chunked)
    return (
       <>
       {
        posts.length===0?
        <div className='container text-center' >

        
        "No Posts Available"</div>:ans.map((postItem)=>{
            
           return <PostItem posts= {postItem} key= {postItem.post_id} style= {style}  onDelete= {onDelete} />
        })
        }
       
        {/* <PostItem style= {style} /> */}
       </>
    )
}
