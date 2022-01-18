import styled from 'styled-components';

const DetailTitle = styled.section`
    width: 100%;
    display: flex;
    margin-bottom: 40px;
    align-items: baseline;

    @media only screen and (max-width: 768px){
        flex-direction: column;
        text-align: center;
        margin-bottom: 25px;
    }

    h3{
        font-size: 1.8rem;
        margin-right: 12px;
        font-weight: 600;

        @media only screen and (max-width: 768px){
            width: 100%;
            margin-bottom: 4px;
            font-size: 1.6rem;
        }
    }

    h4{
        font-size: 1.7rem;
        color: ${({theme}) => theme.color.gray500};
        font-weight: 500;

        @media only screen and (max-width: 768px){
            width: 100%;
            font-size: 1.5rem;
        }
    }
`;

const DetailMain = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: calc(100% - 160px);
    overflow-y: scroll;
    max-height: 750px;

    > div {
        margin-bottom: 40px;

        &:nth-last-child(-n + 2) {
            flex-basis: 100%;
        }

        @media only screen and (max-width: 1150px){
            width: 45%;

            &:nth-last-child(-n + 3) {
                flex-basis: 100%;
            }
        }

        @media only screen and (max-width: 768px){
            width: 100%
        }
    }

`;

const SectionTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    @media only screen and (max-width: 768px){
        justify-content: center;
    }

    i {
        margin-right: 5px;
    }

    h5 {
        font-size: 1.2rem;
        font-weight: 600;
    }
`

export {
    DetailTitle,
    DetailMain,
    SectionTitle
}