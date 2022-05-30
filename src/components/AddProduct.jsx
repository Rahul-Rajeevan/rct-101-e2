import React from "react";
import {Modal,Button,ModalBody,Input,Select,RadioGroup,Radio} from '@chakra-ui/react'
import { useState } from "react";

const AddProduct = () => {
 const [data, setData] = useState({})
 let {title,gender,price,product}=data
  const handle=(e)=>{
    let {name,value,checked,type}=e.target;
    if(type==="checkbox")
    setData({...data,[name]:checked})
    else
    setData({...data,[name]:value})
  }

  const addProd=()=>{
    fetch("http://localhost:8080/products",{method:"POST",
  headers:{"content-type":"application/json"},
body:JSON.stringify({value:data})
}).then((r)=>r.json())
  }


  return (
    <>
      <Button colorScheme='blue' my={4} data-cy="add-product-button">Add new product</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" placeholder="add products" type="text" value={title} name="title" onChange={handle}/>
          <Select data-cy="add-product-category" name="product" value={product} onChange={handle}>
            <option data-cy="add-product-category-shirt" value={"shirt"}>shirt</option>
            <option data-cy="add-product-category-pant" value={"pant"}>pant</option>
            <option data-cy="add-product-category-jeans" value={"jeans"}>jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" name="gender" value={gender} onChange={handle}>
            <Radio data-cy="add-product-gender-male" value={"male"}>Male</Radio>
            <Radio data-cy="add-product-gender-female" value={"female"}>Female</Radio>
            <Radio data-cy="add-product-gender-unisex" value={"unisex"}>Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="add price" type="number" value={price} name="price" onChange={handle}/>
          <Button colorScheme='blue' data-cy="add-product-submit-button" onClick={addProd}>Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
