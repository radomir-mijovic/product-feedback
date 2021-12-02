import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 94px 165px;
  
  @media (max-width: 1400px) {
    padding: 56px 40px;
  }

  @media (max-width: 700px) {
    padding: 0;
  }
`