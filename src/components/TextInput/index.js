import styled from 'styled-components';

const TextInput = styled.input`
  box-sizing: border-box;
  width: 310px;
  height: 50px;
  border: 2px solid #9baaab;
  border-radius: 4px;
  padding: 15px 10px 15px 10px;
  transition: border-color 0.2s ease;
  font-size: 14px;

  -webkit-box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
  -moz-box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);
  box-shadow: 0px 0px 5px 5px rgba(196, 196, 196, 0.24);

  &:hover {
    border-color: #000000;
  }

  &:focus {
    border-color: #000000;
  }
`;

export default TextInput;
