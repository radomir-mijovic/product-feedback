import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useProductFeedbackContext} from "../context/product_feedback_context";

const RoadmapInfo = () => {
    const {products_feedbacks} = useProductFeedbackContext()
    const planned_feedbacks = products_feedbacks.filter(item => item.status === 'Planned')
    const in_progress_feedbacks = products_feedbacks.filter(item => item.status === 'In-Progress')
    const live_feedbacks = products_feedbacks.filter(item => item.status === 'Live')

    return (
        <RoadmapInfoWrapper>
            <div className="header">
                <h1>Roadmap</h1>
                <Link to='/roadmap'>View</Link>
            </div>
            <div className="info">
                <DotStatus>
                    <div className="dot Planned"/>
                    <h2>Planned</h2>
                </DotStatus>
                <h1>{planned_feedbacks.length}</h1>
            </div>
            <div className="info">
                <DotStatus>
                    <div className="dot In-Progress"/>
                    <h2>In-Progress</h2>
                </DotStatus>
                <h1>{in_progress_feedbacks.length}</h1>
            </div>
            <div className="info">
                <DotStatus>
                    <div className="dot Live"/>
                    <h2>Live</h2>
                </DotStatus>
                <h1>{live_feedbacks.length}</h1>
            </div>
        </RoadmapInfoWrapper>
    );
}

const RoadmapInfoWrapper = styled.div`
  width: 255px;
  height: 178px;
  background: #ffff;
  border-radius: 10px;
  padding: 1.3rem 1.3rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    > a {
      font-size: 13px;
      font-weight: 600;
      color: #4661E6
    }
  }

  .info, .info-left {
    display: flex;
    align-items: center;
  }

  .info {
    justify-content: space-between;
    margin-bottom: .5rem;

    > h1 {
      color: #647196;
    }
  }

  @media (max-width: 1150px) {
    width: 223px;
    height: 178px;
  }
  @media (max-width: 700px) {
    margin-top: 24px;
  }
`

export const DotStatus = styled.div`
  width: ${props => props.width || '70%'};
  justify-content: space-between;
  display: flex;
  align-items: center;
  
  .dot {
      height: 8px;
      width: 8px;
      border-radius: 50%;
    }
  
  .Planned {
      background: #F49F85;
    }

    .In-Progress {
      background: #AD1FEA;
    }

    .Live {
      background: #62BCFA;
    }

    > h2 {
      font-size: 1rem;
      font-weight: 300;
      width: 80%;
      margin-left: 3px;
    }
`

export default RoadmapInfo;