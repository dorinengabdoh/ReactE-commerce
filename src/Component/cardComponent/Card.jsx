import React from 'react'
import { useQuery } from "react-query";
import Axios from "axios";
import Navbar from '../navbarComponenet/Navbar';
import Avatar from '../avatarComponent/Avatar';
import Button from '../buttonComponent/Button';

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