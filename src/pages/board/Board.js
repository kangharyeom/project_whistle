import React from 'react';
import styled from 'styled-components';
import SimpleSlider from '../../components/SimpleSlider';

import Category from '../../components/category/Category';
import BoardCategory from '../../components/category/BoardCategory';

const StyledBoard = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardContainer = styled.div`
    width: 100%;
    max-width: 470px;
    height: 100%;
    background-color: #e5f6fd;
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
                <Category/>
                <BoardCategory/>
                <BoardBody>

                </BoardBody>
            </BoardContainer>
        </StyledBoard>
    );
};

export default Board;
