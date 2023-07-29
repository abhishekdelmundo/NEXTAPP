'use client'
import React from 'react'
import { useContext } from 'react'
import style from './blog.module.css'
import { NetflixApp } from '../api/netflixContext';
import Link from 'next/link';
// import { AppCon } from './createContext.jsx'



export default async function Block() {
   const console = await useContext(NetflixApp);
   
   return (
         console.map((f)=> {
         const {id, title, synopsis, backgroundImage} = f.jawSummary

         const thumbnail = backgroundImage.url

         return (
           <div className={style.block} key={id}>
         <div>
            <img src={thumbnail} alt={title} />
         </div>
         <Link href={`/netflix/${id}`}><h3>{title}</h3></Link>
         <p>{synopsis}</p>
      </div> 
         )
      })
    
)
  
   
}
// export default function Block() {
//    const BlogData = useContext(AppCon);
//    return (
//       BlogData.map((f)=> {
//          const {id, title, img, catlog} = f

//          return (
//            <div className={style.block} key={id}>
//          <div>
//             <img src={img} alt="" />
//          </div>
//          <h3>{title}</h3>
//          <p>{catlog}</p>
//       </div> 
//          )
//       })
      
//    )
// }