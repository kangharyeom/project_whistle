import React from 'react';
import styled from 'styled-components';
import SimpleSlider from '../../components/SimpleSlider';

const StyledBoard = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardTop = styled.div`
    width: 100%;
    background-color: #F0FFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BoardBody = styled.div`
width: 100%;
`;

const Board = () => {

    return (
        <StyledBoard>
            <BoardContainer>
                <BoardTop>
                    <SimpleSlider/>
                </BoardTop>
                <BoardBody>

                </BoardBody>
            </BoardContainer>
        </StyledBoard>
    );
};

export default Board;
