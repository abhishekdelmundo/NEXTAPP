
import style from '../blog.module.css'
import styles from './id.module.css'



// export const metadata = {
//    title : {title},
//    description : 'Alone is a romantic horror thrill movie based on a young boy love story..',
// }

export default async function netflixPage({params}){
   const id = params.id

   const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e5ff1876cdmsh9166c54f7393deap170016jsn104050eab205',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
   const FetchData = await fetch(url, options)
   const res = await FetchData.json()

   
   
   return (
      
      res.map((f)=> {
      const {title, backgroundImage, synopsis, tags} = (f.details);

      const thumbnail = backgroundImage.url
      const {name} = tags[0]
      
      return (
      <div className={style.main_blog}>
         
         <h2>{title}</h2>
         <div className={styles.main_blog_net}>
            <img src={thumbnail} alt="" />
         </div>
         <div className={styles.netflix_con}>
            <div className={styles.flex}>
               <div className={styles.con1}>
                  <h3>{title}</h3>
            
                  <button>{name}</button>
                  {/* <button>Horror</button> */}
                  <p>{synopsis}</p>
               </div>
               <div className={styles.con2}>
                  <img src={thumbnail} alt="" />
                  {/* <img src="https://newsaurchai.com/wp-content/uploads/2016/02/bp-600x405.jpg" alt="" /> */}
               </div>
            </div>
         </div>
         
      </div>
      )

      })
      
   )
}