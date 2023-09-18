import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { SpinnerGap } from "@phosphor-icons/react";

const Button = ({ children, disabled, onClick, loading, ...props }) => {
  return (
    <ButtonStyle
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ?
        <Loader data-testid="loader">
          <SpinnerGap size={24} />
        </Loader>
        : children
      }
    </ButtonStyle>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

const ButtonStyle = styled.button(
({ theme, error, disabled}) => `
  min-width: 150px;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s;
  border:none;
  box-shadow: 4px 6px 13px -4px rgb(0 0 0 / 37%);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  background-color: ${disabled ? theme.grayN1 : theme.primary};
  color: ${theme.white};

  &:hover {
    background-color: ${theme.primaryHover};
    box-shadow: 4px 6px 0px -7px rgb(0 0 0 / 42%);
  }
  `
)

const Loader = styled.div`
  > svg {
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    animation: rotate 2s linear infinite;
    margin-top: 6px;
  }
`;
export { Button }
