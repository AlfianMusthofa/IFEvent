import React, { useEffect, useState } from "react"
import Card from "./Card"

interface categoryProps {
   name: string,
}

interface validatedPostsVariable {
   title: string,
   id: number
}

const Category: React.FC<categoryProps> = ({ name }) => {

   const [data, setData] = useState<validatedPostsVariable[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=3')
            const result = await response.json()
            setData(result);
         } catch (error) {
            console.log(error);
         }
      }
      fetchData();
   }, []);

   return (
      <>
         <div className="bg-yellow-primer">
            <div className="container mx-auto text-white text-[28px] font-semibold py-[13px]">
               <h3>{name}</h3>
            </div>
         </div>
         <div className="container mx-auto py-[20px] grid grid-cols-4 gap-[20px]">
            {data.map((item) => (
               <Card key={item.id} title={item.title} />
            ))}
         </div>
      </>
   )
}

export default Category