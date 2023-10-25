import React from 'react';
import styled from 'styled-components';

const StyledBoard = styled.div`
    margin-top: 70px;
    width: 100vw;
`;

const BoardContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardTop = styled.div`
    background-color: #F0FFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 470px;
`;

const BoardBody = styled.div`
`;

const Board = () => {

    return (
        <StyledBoard>
            <BoardContainer>
                <BoardTop>
                </BoardTop>
                <BoardBody>
                
                </BoardBody>
         
            </BoardContainer>
        </StyledBoard>
    );
};

export default Board;
