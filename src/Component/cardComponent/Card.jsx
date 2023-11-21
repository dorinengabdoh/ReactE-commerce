import React from 'react'
import { useQuery } from "react-query";
import Axios from "axios";

const Card = () => {
  const products = 'https://dummyjson.com/products?limit=0&skip=0'
  const { data } = useQuery({
    queryKey: ["reci"],
    queryFn: async () => {
      return await Axios.get(products).then((response) => response.data);
    },
  });
  console.log(data);
  return (
    <>
        < Navbar/>
        <Avatar />
        <Button />
        <div className='container4'>
      
      </div>
    </>
  
  )
}

export default Card