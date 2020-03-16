import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SpinnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const Circle = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid black;
  width: 120px;
  height: 120px;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const FailedText = styled.h1`
  font-size: 50px;
  user-select: none;
`;

const SpinnerText = styled.h2`
  font-size: 16px;
  user-select: none;
`;

const Spinner = ({ failed }) => (
  <SpinnerWrapper>
    {failed ? <FailedText>:(</FailedText> : <Circle />}
    {failed ? (
      <SpinnerText>Poblem with server, please try again later...</SpinnerText>
    ) : (
      <SpinnerText>Loading data...</SpinnerText>
    )}
  </SpinnerWrapper>
);

Spinner.propTypes = {
  failed: PropTypes.bool,
};

Spinner.defaultProps = {
  failed: false,
};

export default Spinner;
