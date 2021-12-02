import styled from "styled-components";

export const Button = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  color: #ffff;
  background-color: ${props => props.backgroundColor || '#AD1FEA'};
  border-radius: 10px;
  border: none;
  font-weight: 600;
  margin-right: ${props => props.marginRight || '1rem'};
  padding: .7rem 1.2rem;
  cursor: pointer;
  transition: background-color .5s;

  :hover {
    background-color: ${props => props.hover || '#C75AF6'};
  }
  
  @media (max-width: 700px) {
    padding: 10.5px 16px;
  }
`