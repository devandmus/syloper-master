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

export { SectionTitle };
