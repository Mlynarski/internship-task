import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin: 0px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin-bottom: 3px;
`;

const ItemLabel = ({ label, children }) => (
  <Wrapper>
    <Label>{label}</Label>
    {children}
  </Wrapper>
);

ItemLabel.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ItemLabel;
