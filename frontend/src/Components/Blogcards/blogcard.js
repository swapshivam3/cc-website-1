
import React from 'react'
// import './blogcard.css'
import Posts from './blogsnippet.json'
import './Blogcards.css'
function Blog(props) {
   console.log(Posts)

    return (
         <div>
            {Posts.slice(1,4).map(post => ( 
            <div className="max-w-md mx-auto my-3  rounded-xl shadow-xl overflow-hidden md:max-w-2xl" key={post.id}>
            <div className="md:flex">
               <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-548" src= {post.Image} alt="A cat" />
               </div>
               <div className="p-10 overflow-x-hidden overflow-y-hidden blogCard">
                 <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.Date}</div>
                 <a href="google.com" className="block mt-1 text-lg leading-tight font-medium text-black hover:text-yellow-400">{post.title}</a>
                 <div className="h-3">
                   <p className="mt-2 text-white-500">{post.body}</p>
                  </div>    
               </div>
            </div>
          </div>
          
            ))}      
         </div>
    )
}

export default Blog





