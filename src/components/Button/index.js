import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 2px solid #9baaab;
  border-radius: 4px;
  transition: border-color 0.2s ease;
  font-size: 20px;
  outline: none;
  margin-left: 20px;
  margin-right: 20px;

  -webkit-box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
  -moz-box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
  box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);

  &:hover {
    border-color: #000000;
  }

  &:focus {
    border-color: #000000;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

export default Button;
