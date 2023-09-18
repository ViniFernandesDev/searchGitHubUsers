import styled from 'styled-components'
import PropTypes from 'prop-types'

import { X } from "@phosphor-icons/react";

const ContentInput = ({
  value,
  register,
  type,
  label,
  placeholder,
  disabled,
  clearValue,
  inputProps = {}
}) => {

  return (
    <Content>
      {label && (
        <Label>
          {label}
        </Label>
      )}

      <StyledRow>
        <Input
          ref={register}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...inputProps}
        />

        {clearValue && (inputProps.value || value) && (
          <ClearButton data-testid="clear-button" onClick={clearValue}>
            <X size={16} />
          </ClearButton>
        )}
      </StyledRow>
    </Content>
  )
}

ContentInput.propTypes = {
  value: PropTypes.string,
  helper: PropTypes.string,
  register: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  inputProps: PropTypes.object
}


const Content = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  position: relative;
  flex-direction: column;
`

const Input = styled.input(
  ({ theme, disabled}) => `
  font-size: 16px;
  color: ${theme.primary};
  font-weight: 400;
  width: 100%;
  height: 48px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: ${(disabled && theme.grayN1) || theme.white};
  position: relative;
  border: 1px solid ${(disabled && theme.grayN1) || theme.grayN1};
  transition:0.3s all;
  border-radius: 4px;
  cursor: auto;
  box-shadow: 2px 4px 11px -5px rgb(0 0 0 / 28%);

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    border: 1px solid ${(disabled && theme.grayN1) || theme.primary};
    color: ${theme.primary};
  }

  ::-webkit-input-placeholder {
    color: ${theme.grayN1};
  }

  `
)

const Label = styled.div`
  margin-bottom: 4px;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  line-height:1;
`

const StyledRow = styled.div`
  position:relative;
  width:100%;
`;


const ClearButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 0;
  cursor: pointer;
`;

export { ContentInput }
