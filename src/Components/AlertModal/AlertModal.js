import React, {useEffect} from 'react';
import styled from "styled-components";
import closeIcon from '../../assets/shared/mobile/icon-close.svg'
import {Button} from "../UI/Button";
import {useModalsContext} from "../context/modals_context";
import {useAuthContext} from "../context/auth_context";
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";

const AlertModal = () => {
    const {setIsAlertModal, setIsMsg, isMsg, alertModal} = useModalsContext()
    const {setAuthModal} = useAuthContext()

    const modalHandler = () => {
        setAuthModal(true)
        setIsAlertModal(false)
    }

    const closeModalHandler = () => {
        setIsAlertModal(false)
        setIsMsg('')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            alertModal()
            setIsMsg('')
        }, 5000)
        return () => clearTimeout(timer)
    }, [isMsg])

    return (
        <AnimatePresence>
            <Wrapper
                initial={{y: '-50%', opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: '-50%', opacity: 0}}
                transition={{duration: .4}}
                as={motion.div}>
                <div className='close-icon'>
                    <img onClick={closeModalHandler} src={closeIcon} alt=""/>
                </div>
                <div className="text">
                    <h2>
                        {isMsg ? isMsg : 'Please login or register in order to be able to add new feedback, comment or reply.'}
                    </h2>
                </div>
                <div className="buttons">
                    {!isMsg && <Button onClick={modalHandler}>Register/Login</Button>}
                </div>
            </Wrapper>
        </AnimatePresence>
    );
};

const Wrapper = styled.div`
  height: 200px;
  width: 350px;
  background: #AD1FEA;
  top: 5%;
  right: 5%;
  z-index: 500;
  position: fixed;
  border-radius: 5px;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.350492);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .close-icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 5px 5px;
    background: #3A4374;
    border-radius: 5px 5px 0 0;

    > img {
      cursor: pointer;
    }
  }

  .text {
    padding: 10px;

    > h2 {
      color: #F7F7FD;
      font-size: 16px;
      text-align: center;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  @media (max-width: 500px) {
    width: 280px;
  }

`

export default AlertModal;