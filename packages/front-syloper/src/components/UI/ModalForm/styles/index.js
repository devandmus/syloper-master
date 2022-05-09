import styled from 'styled-components';

const ModalMessageContainer = styled.div`
  width: 600px;
  padding: 30px;
  border-radius: 20px;
  background-color: #f8f9fa;
  position: fixed;
  top: 100%;
  transform: translateY(200%);
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 20;
  transition: all ease 0.4s;

  &.show {
    transform: translateY(-150%);
    position: sticky;
  }

  @media only screen and (max-width: 768px) {
    width: 85%;
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 2.3rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  > p {
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.color.gray600};
  }

  i {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  width: 600px;
  padding: 30px;
  border-radius: 20px;
  background-color: #f8f9fa;
  position: fixed;
  top: 50%;
  transform: translateY(200%);
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 20;
  transition: all ease 0.4s;

  &.show {
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 768px) {
    width: 85%;
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 2.3rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  > p {
    width: 100%;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.color.gray600};
  }

  i {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }
`;

const ModalForm = styled.div`
  width: 65%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  > div {
    width: 100%;
    margin-bottom: 30px;

    label {
      width: 100%;
      font-weight: 500;
      font-size: 1.1rem;
      margin-bottom: 10px;
      display: block;
    }

    input {
      margin-bottom: 0;
    }

    .modal-select {
      > div {
        width: 100%;
        height: auto;
        border: none;
        box-sizing: border-box;
        padding: 6px 16px;
        background-color: #fff;
        font-size: 1.15rem;
        color: ${({ theme }) => theme.color.text};
        margin: ${(props) => props.margin};
        font-family: ${({ theme }) => theme.font.family};
        border-radius: 7px;
        outline-color: ${({ theme }) => theme.color.primaryGreen};
      }
    }
  }

  .datepicker {
    input {
      width: 100%;
      height: auto;
      border: none;
      box-sizing: border-box;
      padding: 6px 16px;
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
    }
  }

  button {
    margin: 40px auto 0;
    display: block;
    width: 100%;
  }
`;

const Veil = styled.div`
  width: 0%;
  height: 0%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
  transition: background-color ease 0.4s;

  &.show {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export { ModalContainer, ModalForm, Veil, ModalMessageContainer };
