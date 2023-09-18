import PropTypes from 'prop-types';
import styled from 'styled-components';

const BIG = 'big';
const MEDIUM = 'medium';
const REGULAR = 'regular';
const SMALL = 'small';
const TINY = 'tiny';

const getTextStyles = (variant, color) => {
  const colorStyle = color ? `color: ${color};` : `color: #333333;`;
  switch (variant) {
    case BIG:
      return `
        font-size: 28px;
        line-height: 29px;
        ${colorStyle}
        
        @media (max-width: 768px) {
          font-size: 24px;
          line-height: 24px;
        }
      `;
    case MEDIUM:
      return `
        font-size: 20px;
        line-height: 24px;
        ${colorStyle}
        
        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 22px;
        }
      `;
    case REGULAR:
      return `
        font-size: 16px;
        line-height: 25px;
        ${colorStyle}
        
        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 20px;
        }
      `;
    case SMALL:
      return `
        font-size: 14px;
        line-height: 17px;
        ${colorStyle}
        
        @media (max-width: 768px) {
          font-size: 12px;
          line-height: 16px;
        }
      `;
    case TINY:
      return `
        font-size: 12px;
        line-height: 17px;
        ${colorStyle}
        
        @media (max-width: 768px) {
          font-size: 10px;
          line-height: 14px;
        }
      `;
    default:
      return colorStyle;
  }
};

const TextComponent = styled.p`
  ${({ variant, color }) => getTextStyles(variant, color)};
`;

TextComponent.propTypes = {
  variant: PropTypes.oneOf([BIG, MEDIUM, REGULAR, SMALL, TINY]),
  color: PropTypes.string,
};

export { TextComponent }