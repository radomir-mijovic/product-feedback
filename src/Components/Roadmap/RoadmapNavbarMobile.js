import React, {useState} from 'react';
import styled from "styled-components";
import {mobile_links} from "./mobile_links";
import RoadmapCard from "./RoadmapCard";
import {useProductFeedbackContext} from "../context/product_feedback_context";

const RoadmapNavbarMobile = () => {
    const [activeClass, setActiveClass] = useState(0)
    const {
        planned_feedbacks,
        in_progress_feedbacks,
        live_feedbacks
    } = useProductFeedbackContext()
    const [mappingName, setMappingName] = useState('Planned')

    const classHandler = (e, index) => {
        setActiveClass(index)
        setMappingName(e.target.textContent)
    }

    return (
        <>
            <Wrapper>
                <ul className='links'>
                    {mobile_links.map((item, index) => {
                        return (
                            <li key={index}
                                className={activeClass === index ? 'link active-bottom' : 'link'}
                                onClick={(e) => classHandler(e, index)}>
                                <h2 className={activeClass === index ? 'active' : null}>
                                    {item.name}
                                </h2>
                            </li>
                        )
                    })}
                </ul>
            </Wrapper>
            <FeedbackWrapMobile>
                {mappingName === 'Planned' ? planned_feedbacks.map((item, index) => {
                    return (
                        <RoadmapCard key={index} {...item}/>
                    )
                }) : null}
                {mappingName === 'In-Progress' ? in_progress_feedbacks.map((item, index) => {
                    return (
                        <RoadmapCard key={index} {...item}/>
                    )
                }) : null}
                {mappingName === 'Live' ? live_feedbacks.map((item, index) => {
                    return (
                        <RoadmapCard key={index} {...item}/>

                    )
                }) : null}
            </FeedbackWrapMobile>
        </>
    );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 55px;
  border-bottom: 1px solid #bfc3ce;


  .links {
    display: flex;
    width: 100%;
    height: 100%;
    list-style-type: none;

    .active-bottom {
      border-bottom: 4.5px solid #AD1FEA;
    }
  }

  .link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 4.5px solid white;
    transition: border-bottom-color .5s;
    cursor: pointer;

    > h2 {
      font-size: 13px;
      font-weight: 700;
      color: rgba(0, 0, 0, .3);
      transition: color .5s;
    }

    .active {
      color: #3A4374;
    }
  }


  @media (min-width: 701px) {
    display: none;
  }
`

const FeedbackWrapMobile = styled.div`
  width: 100%;
  height: auto;
  padding: 24px;

  @media (min-width: 700px) {
    display: none;
  }
`

export default RoadmapNavbarMobile;