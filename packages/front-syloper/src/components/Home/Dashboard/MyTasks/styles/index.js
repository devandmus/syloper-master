import styled from 'styled-components';

const MyTasksContainer = styled.section`
  flex-basis: 32%;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
`;

const MyTasksTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.primaryGreen};
    color: #fff;
    display: flex;
    font-weight: 700;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`;

const MyTask = styled.div`
  width: 100%;
  padding: 18px 25px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: ${(props) => props.theme.boxShadowC};
  margin-bottom: 15px;

  h4 {
    width: 100%;
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 5px;

    &:last-child {
      font-weight: 400;
    }
  }
`;

export { MyTasksContainer, MyTasksTitle, MyTask };
