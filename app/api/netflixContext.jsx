'use client'

const { createContext } = require("react");
export const NetflixApp = createContext()

export async function NetflixProvider({children}) {
   const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=20&limit_suggestions=20&lang=en';

   const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c5270860f1mshb8570e568a581ffp115a2djsnb69b95eb6146',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

   const FetchData = await fetch(url, options)
   const result = await FetchData.json();
   const console = result.titles
   return <NetflixApp.Provider value={console}>{children}</NetflixApp.Provider>
}