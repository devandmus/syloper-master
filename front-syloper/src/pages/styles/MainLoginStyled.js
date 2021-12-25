import styled from 'styled-components';


const MainLoginStyled = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    align-content: flex;
    justify-content: center;
    background-color: #f8f9fa;

    h2 {
        width: 100%;
        font-size: 2.4rem;
        text-align: center;
        font-weight: 600;
        margin: 70px 0 40px;
      }
    
      & > *:first-child {
        width: 270px;
      }
    
      @media only screen and (max-width: 768px) {
        max-width: 400%;
    
        & > *:first-child {
          width: 240px;
        }
    
        h2 {
          font-size: 2rem;
        }
      }
      
`;

const mainStyled =  styled.main`
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
`;

const headingOneStyled = styled.h1`
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
`;

const paragraphStyled = styled.p`
    marginBottom: 48,
`;

const codeStyled = styled.code`
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
`;

const contain404Styled = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-flow: column;
  align-items: center;
  transform: translateY(-40px);


`;





export {
    MainLoginStyled,
    mainStyled,
    headingOneStyled,
    paragraphStyled,
    codeStyled,
    contain404Styled,
};