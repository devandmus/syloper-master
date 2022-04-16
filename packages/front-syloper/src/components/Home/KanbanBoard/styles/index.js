import styled from 'styled-components';

const SectionTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &.task-title {
    justify-content: space-between;

    h5 {
      display: inline-block;
    }

    button {
      width: 200px;
      font-size: 1.17rem;
    }
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  i {
    margin-right: 5px;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const Board = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;

  @media only screen and (max-width: 768px) {
    white-space: nowrap;
    display: block;
    flex-direction: column;
  }
`;

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

const TaskScroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  div:first-child {
    margin-top: 0;
  }
`;

const SelectStatus = styled.div`
  width: 290px;
  margin: 20px auto 0;

  button {
    &:last-child {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const StatusButton = styled.button`
  width: auto;
  padding: 10px 20px;
  text-align: center;
  border-radius: 25px;
  font-size: 1.01rem;
  font-weight: 500;
  background-color: transparent;
  margin-right: 15px;
  border: none;
  font-family: ${({ theme }) => theme.font.family};
  background-color: ${({ theme }) => theme.color.gray200};

  &.active {
    background-color: ${({ theme }) => theme.color.lightGreen};
    color: #fff;
  }
`;

export {
  SectionTitle,
  Board,
  TaskColumn,
  TaskScroll,
  SelectStatus,
  StatusButton,
};
