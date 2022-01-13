import styled from 'styled-components';

const LoginMainStyled = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-flow: column;
    align-items: center;
    transform: translateY(-40px);

    h2 {
        width: 100%;
        font-size: 2.4rem;
        text-align: center;
        font-weight: 600;
        margin: 70px 0 40px;
    }

    @media only screen and (max-width: 768px){
        max-width: 85%;

        h2{
            font-size: 2rem;
        }
    }
`;

export default LoginMainStyled;
