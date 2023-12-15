// components/InteractiveImage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateDesignAction } from "../actions";
import styled from "styled-components";
import Navbar from "./navbar";
import CustomButton from "./button";
import ContainerWithHotspot from "./details";
import CircularImage from "./boxes";


const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 64px;
`;



const ImageRoom = styled.img`
  width: 60%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
 
	margin: 48px auto;
`;

const Error = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ImageContainer = styled.div`
  position:relative
  width: 80%;
  flex: 1;
	height:80%
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 90%;
	height: 50%;
  border-radius: 20px;
`;

const SelectInputs = styled.div`

  width: 50%;
	heigth: 80%
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DropdownContainer = styled.div`
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 8px;
  margin: 8px;
  height: ${(props) => (props.showOptions ? "24%" : "8%")};
  border-radius: 9px;
  border: 1px solid #d9d9d9;
`;

const DropdownContainerColor = styled.div`
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 8px;
  margin: 8px;

  height: ${(props) => (props.showOptionsColor ? "22%" : "8%")};
  border-radius: 9px;
  border: 1px solid #d9d9d9;
`;

const DropdownBudget = styled.div`
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 4px;
  margin: 4px;

  height: ${(props) => (props.showOptionsBudget ? "24%" : "8%")};
  border-radius: 9px;
  border: 1px solid #d9d9d9;
`;

const SelectContainer = styled.div`
  cursor: pointer;
`;


const OptionsContainer = styled.div`
  display: ${(props) => (props.showOptions ? "block" : "none")};
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
  width: 141.06px;
  height: 95.79px;
  background-color: #d9d9d9;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
`;

const ColorOptions = styled.div`
  display: ${(props) => (props.showOptionsColor ? "flex" : "none")};
  background-color: #ffffff;
  border-radius: 4px;
`;

const ColorBox = styled.div`
  width: 141.06px;
  height: 95.79px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SelectedColor = styled.div`
margin-top:8px;
  width: 37px;
  height: 25px;
  background-color: ${(props) => props.color};
`;

const BudgetOptions = styled.div`
  display: ${(props) => (props.showOptionsBudget ? "flex" : "none")};
  background-color: #ffffff;
  border-radius: 4px;
`;

const BudgetBox = styled.div`
  width: 220.11px;
  height: 40.1px;
  border-radius: 8px;
  background-color: #f4f4f4;
  cursor: pointer;
  padding: 10px;

  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledButtonAdd = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 33px;
  border: 2px solid #c98e42;
  background-color: transparent;
  color: #c98e42;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;

const StyledButtonRedesign = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 33px;
  border: none;
  background-color: #c98e42;
  color: white;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;

const InteractiveImage = () => {
  const dispatch = useDispatch();
  const [isCamera, setIsCamera] = useState(true);

  const { loading, data, error } = useSelector((state) => state);
  const [isSpecial, setIsSpecial] = useState(false);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Theme1");
  const [showOptionsColor, setShowOptionsColor] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [showOptionsBudget, setShowOptionsBudget] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setShowOptions(false);
  };

  const colorOptions = [
    { id: 1, color: "#FFF0CD" },
    { id: 2, color: "#808080" },
    { id: 3, color: "#575757" },
    { id: 4, color: "#A35656" },
  ];

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setShowOptionsColor(false);
  };

  const budgetOptions = [
    { id: 1, text: "1000 SAR - 5000 SAR" },
    { id: 2, text: "6000 SAR - 10,000 SAR" },
    { id: 3, text: "11,000 SAR - 15,000 SAR" },
    { id: 4, text: "16,000 SAR - 20,000 SAR" },
  ];

  const handleBudgetSelection = (text) => {
    setSelectedBudget(text);
    setShowOptionsBudget(false);
  };

	const handleImageClick = () => {
    setIsCamera(false);
    // Add your logic here
  };

  useEffect(() => {
    if (selectedTheme && selectedColor && selectedBudget) {
      setIsSpecial(true);
    }
  }, [selectedTheme, selectedColor, selectedBudget]);

  const handleClick = () => {
    const payload = {
      style: "modern",
      pic_id: "room4",
      project_id: "full-house",
      budget: 4000,
      hardcoded_pics: ["01", "02", "03", "05", "06", "07"],
    };

    const headers = {
      "Content-type": "application/json",
      Accept: "application/json",
      "x-api-key": "9de70a5e-01e6-4ece-b100-d35a7a4bbab7",
    };
    isSpecial ? 
    dispatch(generateDesignAction(payload, headers)): alert('please fill all the fields');
  };

  if (error) return <p style={{display:'flex', alignItems:'center', justifyContent:'center'}}>Error: {error}</p>;

  // Using data to render  interactive image
  const imageUrl =
    data != null ? `data:image/png;base64,${data?.output_image}` : "/house.png";

  return (
    <div>
      <Navbar />
      {/*  interactive image rendering code */}
      {loading && (
        <Error>
          <p>Loading please wait...</p>{" "}
        </Error>
      )}

      {isCamera === true ? (
        <ImageRoom
          src="./room.png"
          alt="Interactive Design"
          onClick={handleImageClick}
        />
      ) : (
        <Container>
          <ImageContainer>
            <Image src={imageUrl} alt="Interactive Design" />
            {data?.boxes.map((position, index) => (
              <CircularImage key={index} position={position} />
            ))}
            {data && (
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-between",
                
                }}
              >
                <p>
                  Total Price: <span style={{ color: "#0BB764" }}>$750</span>
                </p>
                <div>
                  <StyledButtonAdd>Add furniture</StyledButtonAdd>
                  {' '}
                  <StyledButtonRedesign>Redesign</StyledButtonRedesign>
                </div>
              </div>
            )}
          </ImageContainer>
          {data != null ? (
            <ContainerWithHotspot
              text="Click on any items"
              imageUrl="hotspot.png"
            />
          ) : (
            <SelectInputs>
              <DropdownContainer
                showOptions={showOptions}
                onClick={() => setShowOptions(!showOptions)}
              >
                <SelectContainer>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    
                    }}
                  >
                    <p>1.Select your style: </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        
                      }}
                    >
                      <p style={{ fontWeight: "bold" }}>{selectedTheme}</p>

                      <img src="./arrow.png" alt="arrow" />
                    </div>
                  </div>
                  {showOptions && (
                    <OptionsContainer
                      showOptions={showOptions}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "4px",
                       
                      }}
                    >
                      <Option onClick={() => handleThemeSelect("Theme1")} />
                      <Option onClick={() => handleThemeSelect("Theme2")} />
                      <Option onClick={() => handleThemeSelect("Theme3")} />
                      <Option onClick={() => handleThemeSelect("Theme4")} />
                    </OptionsContainer>
                  )}
                </SelectContainer>
              </DropdownContainer>

              <DropdownContainerColor
                showOptionsColor={showOptionsColor}
                onClick={() => setShowOptionsColor(!showOptionsColor)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                   
                  }}
                >
                  <p style={{ marginTop: "8px" }}>2.Select your color: </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                     
                    }}
                  >
                    <SelectedColor color={selectedColor} />
                    <img src="./arrow.png" alt="arrow" />
                  </div>
                </div>
                {showOptionsColor && (
                  <ColorOptions
                    showOptionsColor={showOptionsColor}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "4px",
                    }}
                  >
                    {colorOptions.map((option) => (
                      <ColorBox
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                       
                          padding: "4px",
                        }}
                        key={option.id}
                        color={option.color}
                        onClick={() => handleColorSelection(option.color)}
                      />
                    ))}
                  </ColorOptions>
                )}
              </DropdownContainerColor>

              <DropdownBudget
                showOptionsBudget={showOptionsBudget}
                onClick={() => setShowOptionsBudget(!showOptionsBudget)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  
                  }}
                >
                  <p style={{ margin: 10 }}>3.Select your budget: </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                   
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>{selectedBudget} </p>
                    <img src="./arrow.png" alt="arrow" />
                  </div>
                </div>
                {showOptionsBudget && (
                  <BudgetOptions showOptionsBudget={showOptionsBudget}>
                    {budgetOptions.map(
                      (option, index) =>
                        (index === 0 || index === 1) && (
                          <BudgetBox
                            style={{
                              display: "flex",
                            
                              justifyContent: "space-between",
                              margin: "4px",
                            }}
                            key={option.id}
                            onClick={() => handleBudgetSelection(option.text)}
                          >
                            {option.text}
                          </BudgetBox>
                        )
                    )}
                  </BudgetOptions>
                )}
                {showOptionsBudget && (
                  <BudgetOptions showOptionsBudget={showOptionsBudget}>
                    {budgetOptions.map(
                      (option, index) =>
                        (index === 2 || index === 3) && (
                          <BudgetBox
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              margin: "4px",
                            }}
                            key={option.id}
                            onClick={() => handleBudgetSelection(option.text)}
                          >
                            {option.text}
                          </BudgetBox>
                        )
                    )}
                  </BudgetOptions>
                )}
              </DropdownBudget>
              <CustomButton onClick={handleClick} isSpecial={isSpecial}>
                Generate Design
              </CustomButton>
            </SelectInputs>
          )}
        </Container>
      )}
    </div>
  );
};

export default InteractiveImage;
