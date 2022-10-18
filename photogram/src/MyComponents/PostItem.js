import React from 'react'
// import { Posts } from './Posts'
import EifelTower from '../static/EifelTower.jpg';


export const PostItem = ({ posts, style, onDelete }) => {

    let columnWIdth = {
        width: "100%",
        // background : "yellow"

    }
    
    let components = [];
    for(let i =0; i<posts.length; i++){
    console.log(posts[i]['post_img'])
        components.push(<div className="p-2 my-2 mx-3" style={{width: '30%', marginBottom: '10px'}}>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row my-4">
                                    <div className="col mx-3" style={columnWIdth} align="center" >
                                        <div className="card" style={style} >
                                            <img className="card-img-top" src={posts[i]['post_img']} alt={posts[i]['post_id']} />
                                            <div className="card-body">
                                                <p className="card-text">{posts[i]['post_desc']}</p>
                                            </div>
                                            <button className='btn btn-outline-danger btn-sm' onClick={() => { onDelete(posts) }} >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
    }

    console.log('here are the compoenents')
console.log(components)

    return (
        <>
            

            <div className="d-flex flex-row justify-content-start">
           {components}
            </div>
        </>

    )
}
