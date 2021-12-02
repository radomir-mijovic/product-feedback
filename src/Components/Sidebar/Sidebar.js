import React from 'react';
import styled from "styled-components";
import FeedbackBoard from "../FeedbackBoard/FeedbackBoard";
import Categories from "../Categories/Categories";
import RoadmapInfo from "../Roadmap/RoadmapInfo";

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <FeedbackBoard/>
            <Categories/>
            <RoadmapInfo/>
        </SidebarWrapper>
    );
};

const SidebarWrapper = styled.div`
  height: 529px;
  width: 255px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 1150px) {
    flex-direction: row;
    width: 689px;
    height: 178px;
  }
  
  @media (max-width: 700px) {
    display: none;
  }
`

export default Sidebar;