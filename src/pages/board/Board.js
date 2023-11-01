import React from 'react';
import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Category from '../../components/category/Category';
import { BoardInfoComponent } from '../../components/board/BoardInfo'

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <StyledBoard>
            <BoardContainer>
                <BoardTop>
                    
                </BoardTop>
                <Category/>
                
                <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper', borderRadius: '10px' }}>
                    <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    variant="scrollable" 
                    aria-label="scrollable force tabs example" 
                    >
                    <Tab label="자유게시판"/>
                    <Tab label="축구" />
                    <Tab label="풋살" />
                    <Tab label="농구" />
                    <Tab label="야구" />
                    <Tab label="발야구" />
                    <Tab label="축구선수" />
                    <Tab label="음악" />
                    <Tab label="영화" />
                    </Tabs>
                </Box>
                    {value === 0 && <BoardInfoComponent value={value}/>}
                    {value === 1 && <BoardInfoComponent value={value}/>}
                    {value === 2 && <BoardInfoComponent value={value}/>}
                    {value === 3 && <BoardInfoComponent value={value}/>}
                    {value === 4 && <BoardInfoComponent value={value}/>}
                    {value === 5 && <BoardInfoComponent value={value}/>}
                    {value === 6 && <BoardInfoComponent value={value}/>}
                    {value === 7 && <BoardInfoComponent value={value}/>}
                    {value === 8 && <BoardInfoComponent value={value}/>}
                    {value === 9 && <BoardInfoComponent value={value}/>}
                    
                <BoardBody>
                </BoardBody>
            </BoardContainer>
        </StyledBoard>
    );
};

export default Board;
