import styled from "styled-components";
import Button from "../../../../ui/Button";

const ProjectsHeaderContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;

    ${Button} {
        width: 180px;
        font-size: 1.15rem;
    }
`;

const Count = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
`;

const CountItem = styled.div`
    p{
        width: 100%;

        &:first-child{
            font-size: 1.6rem;
            font-weight: 600;
            margin-bottom: 3px;
        }

        &:last-child{
            font-size: 1.15rem;
            color: ${({ theme }) => theme.color.gray600 };
        }
    }
`;

export {
    ProjectsHeaderContainer,
    Count,
    CountItem
}


