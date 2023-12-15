import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 629.74px;
  height: 268.67px;
  border-radius: 9px;
  position: relative;
  border: 1px solid #d9d9d9;
`;

const HotspotImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 9px;
`;

const CenterContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Text = styled.p`
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #000000; /* Set text color as needed */

`;

const ContainerWithHotspot = ({ imageUrl, text }) => {
  return (
    <StyledContainer>
      <CenterContent>
        <HotspotImage src={imageUrl} alt="Hotspot" />

        <Text>{text}</Text>
      </CenterContent>
    </StyledContainer>
  );
};

export default ContainerWithHotspot;

