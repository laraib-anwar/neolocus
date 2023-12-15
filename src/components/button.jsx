import React from 'react';

import styled from 'styled-components';


const StyledButton = styled.button`
  width:47%;
  height: 60px;
  position: absolute;
  border-radius: 37px;
  margin-top:20px;
  background-color: ${({ isSpecial }) => (isSpecial ? '#C98E42' : '#D9D9D9')};
  color: #FFFFFF; /* Set text color as needed */
  font-size: 16px; /* Set font size as needed */
  border: none;
  cursor: pointer;
  outline: none;
`;

const CustomButton = ({ onClick, children, isSpecial }) => {
   
  return (
    <StyledButton onClick={onClick} isSpecial={isSpecial}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
