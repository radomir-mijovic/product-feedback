import React, {useState} from 'react';
import styled from "styled-components";
import headerBackground from '../../assets/suggestions/mobile/background-header.png'
import menuIcon from '../../assets/shared/mobile/icon-hamburger.svg'
import closeIcon from '../../assets/shared/mobile/icon-close.svg'
import {motion, AnimatePresence} from "framer-motion";
import Categories from "../Categories/Categories";
import RoadmapInfo from "../Roadmap/RoadmapInfo";

const HeaderMobile = () => {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <AnimatePresence>
                {menu &&
                <Menu
                    as={motion.div}
                    initial={{x: '100%'}}
                    animate={{x: 0}}
                    exit={{x: '100%'}}
                    transition={{duration: .5}}
                >
                    <div className="left" onClick={() => setMenu(false)}/>
                    <div className="right">
                        <Categories setMenu={setMenu}/>
                        <RoadmapInfo className='second'/>
                    </div>
                </Menu>
                }
            </AnimatePresence>
            <Wrapper>
                <div>
                    <h1>Frontend Mentor</h1>
                    <h2>Feedback Board</h2>
                </div>
                {!menu ?
                    <img onClick={() => setMenu(true)} src={menuIcon} alt=""/> :
                    <img onClick={() => setMenu(false)} src={closeIcon} alt=""/>
                }
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  background: url(${headerBackground}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  > img {
    cursor: pointer;
  }

  > div {
    > h1, h2 {
      color: #ffff;
    }

    > h1 {
      font-size: 15px;
    }

    > h2 {
      font-size: 13px;
      font-weight: 500;
    }
  }


  @media (min-width: 701px) {
    display: none;
  }
`

const Menu = styled.div`
  height: 100%;
  width: 100vw;
  background: transparent;
  position: absolute;
  z-index: 100;
  top: 72px;
  display: flex;

  .left {
    width: 27%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
  }

  .right {
    width: 73%;
    height: 100%;
    background: #F7F8FD;
    padding: 24px;

    .second {
      margin-top: 24px;
    }
  }

  @media (min-width: 700px) {
    display: none;
  }
`

export default HeaderMobile;