import React, {useState} from 'react';
import styled from "styled-components";
import arrowDownIcon from "../../assets/shared/icon-arrow-down.svg";
import {category_names} from "../helpers/dropdown_names";
import checkIcon from "../../assets/shared/icon-check.svg";


const FormCategory = ({setIsCategory, isCategory}) => {
    const [menuIndex, setMenuIndex] = useState(0)
    const [menu, setMenu] = useState(false)

    const menuHandler = (index, name) => {
        setMenuIndex(index)
        setMenu(false)
        setIsCategory(name)
    }


    return (
        <Category>
            <h1>Category</h1>
            <h2>Choose a category for feedback</h2>
            <div onClick={() => setMenu(prevState => !prevState)}
                 className="choose">
                <h2>{isCategory}</h2>
                <img src={arrowDownIcon} alt=""/>
            </div>
            {menu &&
            <ul className="menu">
                {category_names.map((item, index) => {
                    const {name} = item;
                    return (
                        <li key={index} onClick={() => menuHandler(index, name)}>
                            {name}
                            {menuIndex === index && <img src={checkIcon} alt=""/>}
                        </li>
                    )
                })}
            </ul>
            }
        </Category>
    );
};

const Category = styled.div`
  position: relative;

  > h1, h2 {
    font-size: 14px;
  }

  > h2 {
    color: #3A4374;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .choose {
    width: 100%;
    height: 48px;
    background: #F7F7FD;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    cursor: pointer;
    margin-bottom: 24px;
    border: 1px solid #F7F7FD;
    border-radius: 5px;

    :hover {
      border: 1px solid #4661E6;
    }
    
    > input {
      border: none;
    }

    > img {
      height: 5px;
      width: 9px;
    }

    > h2 {
      color: #3A4374;
      font-weight: 400;
    }
  }

  .menu {
    list-style-type: none;
    font-size: 16px;
    color: #647196;
    height: 240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.350492);
    border-radius: 10px;
    position: absolute;
    z-index: 5;

    > li {
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      padding: 12px 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      :last-child {
        border-bottom: none;
      }

      :hover {
        color: #AD1FEA;
      }

      > img {
        width: 11px;
        height: 8px;
      }
    }
  }

  @media (max-width: 600px) {
    > h1, h2 {
      font-size: 13px;
    }

    > h2 {
      color: #647196;
    }

    > textarea {
      height: 120px;
    }
  }

`

export default FormCategory;