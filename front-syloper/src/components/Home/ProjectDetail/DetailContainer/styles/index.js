import styled from 'styled-components';

const DetailTitle = styled.section`
    width: 100%;
    display: flex;
    margin-bottom: 40px;
    align-items: baseline;

    h3{
        font-size: 1.8rem;
        margin-right: 12px;
        font-weight: 600;
    }

    h4{
        font-size: 1.7rem;
        color: ${({theme}) => theme.color.gray500};
        font-weight: 500;
    }
`;

const DetailMain = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    > div {
        margin-bottom: 40px;

        &:nth-last-child(-n + 2) {
            flex-basis: 100%;
        }
    }

`;

const SectionTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 12px;

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