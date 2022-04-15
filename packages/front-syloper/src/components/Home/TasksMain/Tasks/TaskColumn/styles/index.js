import styled from 'styled-components';

const TaskColumn = styled.div`
  width: 31%;
  height: 100%;

  > h5 {
    width: 100%;
    font-size: 1.15rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray600};
    margin-bottom: 20px;

    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-right: 0;
    white-space: normal;
    display: inline-block;
  }
`;

export default TaskColumn;
