import React, {useState} from 'react';
import styled from "styled-components";
import iconSuggestion from '../../assets/suggestions/icon-suggestions.svg'
import {Button} from "../UI/Button";
import iconArrowDownWhite from '../../assets/shared/icon-arrow-down-white.svg'
import {motion, AnimatePresence} from "framer-motion";
import {link_names} from "./link_names";
import checkIcon from '../../assets/shared/icon-check.svg'
import {useHistory} from "react-router-dom";
import {useProductFeedbackContext} from "../context/product_feedback_context";

const Header = () => {
    const [sort, setSort] = useState(false)
    const [isActive, setIsActive] = useState(0)
    const [nameIndex, setNameIndex] = useState(0)
    const {sortBy} = useProductFeedbackContext()
    const history = useHistory()

    const nameHandler = (index, e) => {
        sortBy(e.target.textContent)
        setIsActive(index)
        setNameIndex(index)
        setSort(false)
    }

    const addFeedbackHandler = (e) => {
        e.preventDefault()
        history.push('/new-feedback')
    }

    return (
        <HeaderWrapper>
            <div className="left-side">
                <img src={iconSuggestion} alt=""/>
                <h1>6 Suggestions</h1>
                <div className="select"
                >
                    <h3>Sort by:</h3>
                    {link_names.map((item, index) => {
                        const {name} = item;
                        return (
                            <h3 key={index} onClick={() => setSort(prev => !prev)}>
                                {index === nameIndex && name}
                            </h3>
                        )
                    })}
                    <img onClick={() => setSort(prev => !prev)}
                         src={iconArrowDownWhite} alt=""/>
                    <AnimatePresence>
                        {sort &&
                        <motion.ul
                            initial={{y: '-50px', opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: '-70%', opacity: 0}}
                            transition={{duration: .5}}
                        >
                            {link_names.map((li, index) => {
                                return (
                                    <li key={index} onClick={(e) => nameHandler(index, e)}>
                                        {li.name}
                                        {isActive === index && <img src={checkIcon} alt=""/>}
                                    </li>
                                )
                            })}
                        </motion.ul>
                        }
                    </AnimatePresence>
                </div>
            </div>
            <Button
                onClick={(e) => addFeedbackHandler(e)}
                height={'44px'}
                width={'158px'}
                type='button'
            >
                + Add Feedback
            </Button>
        </HeaderWrapper>
    );
};

export const HeaderWrapper = styled.div`
  padding: ${props => props.padding};
  width: ${props => props.width || '825px'};
  height: ${props => props.height || '4.5rem'};
  background: #3A4374;
  border-radius: 10px;
  margin-left: ${props => props.marginLeft || '2rem'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  .left-side {
    display: flex;
    align-items: center;
    color: #ffff;

    > img {
      margin: 24px 24px;
      height: 24px;
      width: 23px;
    }

    > h1 {
      margin-right: 2rem;
    }

    .select {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 160px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      .most {
        font-weight: 700;
        margin-left: .5rem;
      }

      > img {
        margin-left: 5px;

      }

      > h3 {
        font-size: 14px;
        font-weight: 400;

      }

      > ul {
        position: absolute;
        width: 255px;
        height: 192px;
        top: 60px;
        background-color: #ffff;
        z-index: 10;
        border-radius: 10px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.350492);

        > li {
          font-size: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          padding: 12px 24px;
          width: 100%;
          color: #647196;
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
            height: 7.5px;
            width: 11px;
          }
        }
      }
    }

    > h1 {
      color: #ffff;
    }
  }

  @media (max-width: 1150px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
    margin-bottom: 24px;
  }

  @media (max-width: 700px) {
    margin: 0;
    width: 100vw;
    border-radius: 0;
    height: 56px;

    .left-side {
      margin-left: 24px;

      > img, h1 {
        display: none;
      }

      .select {
        > h3 {
          font-size: 13px;
        }
      }
    }
  }

`

export default Header;