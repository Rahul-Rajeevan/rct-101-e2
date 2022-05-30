import React from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import { Flex,Grid } from '@chakra-ui/react'


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [list, setList] = useState([]);
  useEffect(() => {
    const getData=async()=>{
      let r=await axios.get("http://localhost:8080/products");
      setList([...r.data]);
    }
  getData();
  }, [])
  

  
  return (
    
    <Flex flexDirection={"column"} width={"70%"} margin={"auto"} alignItems={"center"}>
      <AddProduct />
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>{list.map(e=><Product item={e}/>)}</Grid>
      <Pagination/>
    </Flex>
   );
};

export default Products;
