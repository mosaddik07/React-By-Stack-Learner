import styled from "styled-components";
const BaseButton = styled.button`
  outline: none;
  border: none;
  letter-spacing: 2px;
  padding: 8px 10px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

const PrimaryButton = styled(BaseButton)`
  background: red;
  color: white;
`;
const StyleComponent = () => {
  return (
    <div>
      <h1>Styled Component</h1>
      <BaseButton dark={true}>I Am A Button</BaseButton>
      <PrimaryButton>Primary Button</PrimaryButton>
    </div>
  );
};

export default StyleComponent;
