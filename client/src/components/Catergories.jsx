import styled from "styled-components";
import React from "react";
import { categories } from "../data";
import CategoryItem from "./CatergoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Catergories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Catergories;
