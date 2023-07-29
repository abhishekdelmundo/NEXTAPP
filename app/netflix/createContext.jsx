'use client'

import { createContext } from "react";

export const AppCon = createContext();

export function AppProvider({children}) {

   const BlogData = [
      {
         id : 1,
         title : 'Welcome',
         img : '/blog/1.webp',
         catlog : 'This is my first blog post page where i described about my blogging experience in this blog'
      },
      {
         id : 2,
         title : 'Congratulation blog',
         img : '/blog/2.png',
         catlog : 'This is my first blog post page where i described about my blogging experience in this blog'
      },
      {
         id: 3,
         title : 'Catlog First Tag',
         img : '/blog/3.png',
         catlog : 'This is my first blog post page where i described about my blogging experience in this blog'
      },
      {
         id : 4,
         title : 'Catlog First Tag',
         img : '/blog/4.jpeg',
         catlog : 'This is my first blog post page where i described about my blogging experience in this blog'
      },
      {
         id : 5,
         title : 'Catlog First Tag',
         img : '/blog/5.png',
         catlog : 'This is my first blog post page where i described about my blogging experience in this blog'
      },
      {
         id : 6,
         title : 'Catlog First Tag',
         img : '/blog/6.jpeg',
         catlog : 'This is my first blog post page where i described about my blogging experience in this blog'
      },
      {
         id : 7,
         title : 'Catlog First Tag',
         img : '/blog/7.avif',
         catlog : 'This is my first blog post page where i described about my blogging experience in this blog'
      },
      {
         id : 8,
         title : 'Catlog First Tag',
         img : '/blog/8.png',
         catlog : 'This is my first blog post page where i described about my blogging experience in this blog'
      },
   ]
   return (
      <AppCon.Provider value={BlogData}>{children}</AppCon.Provider>
   )
}

