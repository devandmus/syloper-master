import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextAreaStyled = styled.textarea`
row: 5;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 14px 16px;
  background-color: #fff;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.color.text};
  margin: ${(props) => props.margin};
  font-family: ${({ theme }) => theme.font.family};
  border-radius: 7px;
  outline-color: ${({ theme }) => theme.color.primaryGreen};
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

TextAreaStyled.propTypes = {
  margin: PropTypes.string,
};

TextAreaStyled.defaultProps = {
  margin: '0 0 20px 0',
};

export default TextAreaStyled;
