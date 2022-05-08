import styled from 'styled-components';

const TableBody = styled.table`
  width: 100%;
  background-color: #fff;
  text-align: center;
  border-radius: 15px;
  margin-top: 20px;
  overflow-x: scroll;

  tr {
    text-align: center;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.color.border};
    &:last-child {
      border: none;
    }
  }

  th {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 21px 10px;

    @media only screen and (max-width: 1000px) {
      font-size: 1.05rem;
    }
  }

  td {
    text-align: center;
    width: 200px;
    padding: 18px 8px;
    font-size: 1.02rem;
    img {
      height: 48px;
      border-radius: 24px;
    }

    @media only screen and (max-width: 1000px) {
      font-size: 1rem;
    }
  }
`;

export default TableBody;
