import styled from 'styled-components';

const ParticipantsList = styled.div`
    width: 100%;
`;

const ParticipantsImg = styled.span`
    width: 45px;
    height: 45px;
    display: inline-block;
    transform: ${ props => `translateX(${props.translatex}px)`};
    background-color: gray;
    border: 1px solid #fff;
    border-radius: 50%;

    &:last-child {
        background-color: ${({theme}) => theme.color.lightGreen};
        position: relative;

        i {
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: 50%;
            width: 15px;
            transform: translateY(-50%);
        }
    }
`;

export {
    ParticipantsList,
    ParticipantsImg
}
