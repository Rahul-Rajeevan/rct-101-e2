import React from "react";
import {Button,Select,ButtonGroup} from '@chakra-ui/react'
const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button colorScheme='blue' data-cy="pagination-first-button">First</Button>
      <Button colorScheme='blue' data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select" name="pageLimit" >
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button colorScheme='blue' data-cy="pagination-next-button">Next</Button>
      <Button colorScheme='blue' data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
