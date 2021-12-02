import React from 'react';
import styled from "styled-components";

const Loading = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="ball"/>
                <div className="ball"/>
                <div className="ball"/>
                <div className="ball"/>
                <div className="ball"/>
                <div className="ball"/>
                <div className="ball"/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .container {
    width: 200px;
    height: 100px;
    padding-top: 100px;
    margin: 0 auto;
  }

  .ball {
    width: 10px;
    height: 10px;
    margin: 10px auto;
    border-radius: 50px;
  }

  .ball:nth-child(1) {
    background: #AD1FEA;
    -webkit-animation: right 1s infinite ease-in-out;
    -moz-animation: right 1s infinite ease-in-out;
    animation: right 1s infinite ease-in-out;
  }

  .ball:nth-child(2) {
    background: #AD1FEA;
    -webkit-animation: left 1.1s infinite ease-in-out;
    -moz-animation: left 1.1s infinite ease-in-out;
    animation: left 1.1s infinite ease-in-out;
  }

  .ball:nth-child(3) {
    background: #AD1FEA;
    -webkit-animation: right 1.05s infinite ease-in-out;
    -moz-animation: right 1.05s infinite ease-in-out;
    animation: right 1.05s infinite ease-in-out;
  }

  .ball:nth-child(4) {
    background: #AD1FEA;
    -webkit-animation: left 1.15s infinite ease-in-out;
    -moz-animation: left 1.15s infinite ease-in-out;
    animation: left 1.15s infinite ease-in-out;
  }

  .ball:nth-child(5) {
    background: #AD1FEA;
    -webkit-animation: right 1.1s infinite ease-in-out;
    -moz-animation: right 1.1s infinite ease-in-out;
    animation: right 1.1s infinite ease-in-out;
  }

  .ball:nth-child(6) {
    background: #AD1FEA;
    -webkit-animation: left 1.05s infinite ease-in-out;
    -moz-animation: left 1.05s infinite ease-in-out;
    animation: left 1.05s infinite ease-in-out;
  }

  .ball:nth-child(7) {
    background: #AD1FEA;
    -webkit-animation: right 1s infinite ease-in-out;
    -moz-animation: right 1s infinite ease-in-out;
    animation: right 1s infinite ease-in-out;
  }

  @-webkit-keyframes right {
    0% {
      -webkit-transform: translate(-15px);
    }
    50% {
      -webkit-transform: translate(15px);
    }
    100% {
      -webkit-transform: translate(-15px);
    }
  }

  @-webkit-keyframes left {
    0% {
      -webkit-transform: translate(15px);
    }
    50% {
      -webkit-transform: translate(-15px);
    }
    100% {
      -webkit-transform: translate(15px);
    }
  }

  @-moz-keyframes right {
    0% {
      -moz-transform: translate(-15px);
    }
    50% {
      -moz-transform: translate(15px);
    }
    100% {
      -moz-transform: translate(-15px);
    }
  }

  @-moz-keyframes left {
    0% {
      -moz-transform: translate(15px);
    }
    50% {
      -moz-transform: translate(-15px);
    }
    100% {
      -moz-transform: translate(15px);
    }
  }

  @keyframes right {
    0% {
      transform: translate(-15px);
    }
    50% {
      transform: translate(15px);
    }
    100% {
      transform: translate(-15px);
    }
  }

  @keyframes left {
    0% {
      transform: translate(15px);
    }
    50% {
      transform: translate(-15px);
    }
    100% {
      transform: translate(15px);
    }
  }
`

export default Loading;