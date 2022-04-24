import styled from 'styled-components';

const StatusButtonStyle = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.color};
  text-align: center;
  color: #fff;
  border: 2px solid ${(props) => props.color};
  padding: 10px;
  font-size: 1rem;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default StatusButtonStyle;
