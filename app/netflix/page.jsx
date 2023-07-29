import { NetflixProvider } from '../api/netflixContext'
import Block from './block'
import style from './blog.module.css'
// import { AppProvider } from './createContext'

export const metadata = {
   openGraph : {
      title : 'Netflix',
      description : 'This is a fake Netflix website.',
      url : '/',
      type : 'website',
      icon : [
         {
            url : 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico',
         },
      ],
   }
}

export default function Blog() {
   return (
      
      <div className={style.main_blog}>
         <h2>Netflix Series</h2>
         <div className={style.main_blog_div}>
            <NetflixProvider>
               <Block/>
            </NetflixProvider>
         </div>
      </div>
      

   )
}