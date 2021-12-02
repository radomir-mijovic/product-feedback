import React, {useState} from 'react';
import styled from "styled-components";
import {filters} from "./filter_names";
import {useProductFeedbackContext} from "../context/product_feedback_context";

const Categories = ({setMenu}) => {
    const [isActive, setIsActive] = useState()
    const {filterByCategory} = useProductFeedbackContext()

    const buttonHandler = (e, index) => {
        e.preventDefault()
        filterByCategory(e.target.name)
        setIsActive(index)
        setMenu && setMenu(false)
    }

    return (
        <CategoriesWrapper>
            {filters.map((item, index) => {
                return (
                    <CategoryButton
                        name={item.name}
                        onClick={(e) => buttonHandler(e, index)}
                        className={isActive === index ? 'active' : null}
                        key={index}>
                        {item.name}
                    </CategoryButton>
                )
            })}
        </CategoriesWrapper>
    );
};

const CategoriesWrapper = styled.div`
  padding: 1.2rem 1.2rem;
  height: 166px;
  width: 255px;
  background: #ffff;
  border-radius: 10px;
  
  .active {
    color: #ffff;
    background: #4661E6;
  }
  
  @media (max-width: 1150px) {
    width: 223px;
    height: 178px;
  }
  

`

export const CategoryButton = styled.button`
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 5px 15px;
  background: #F2F4FF;
  color: #4661E6;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-right: .7rem;
  cursor: ${props => props.cursor || 'pointer'};
  
  :hover {
    background: ${props => props.hoverColor || '#CFD7FF'};
  }
`

export default Categories;