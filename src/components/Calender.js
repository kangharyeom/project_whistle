import React, { useState } from 'react';
import styled from 'styled-components';

import 'react-day-picker/dist/style.css';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledCalender = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const CalenderContainer = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  padding: 1% 0 0.5% 0;
  justify-content: center;
  align-items: center;
  background-color: white;
  max-width: 470px;

`;

const WeeklyCalendarContainer = styled.div`
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 3px 0px 0px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

const DayButtons = styled.div`
  width: 100%;
   max-width: 470px;
  display: flex;
  align-items: center;

`;

function calculateWeekDates(startDate) {
  const startOfWeek = new Date(startDate);
  startOfWeek.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  return { startOfWeek, endOfWeek };
}

const CalendarButton = styled.button`
  background-color: ${(props) => (props.isToday ? '#cae7ff' : 'white')};
  border-top: none;
  border-left: none;
  box-shadow: rgba(50, 50, 93, 0.25) 1px 2px 4px 0px;
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  cursor: pointer;
  margin: 3px;
  padding: 0;
  width: 10%;
  height: 10%;
  border-radius: 10%;
  display: flex;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  color: ${(props) =>
    props.isSaturday ? 'blue' : props.isHoliday ? 'red' : 'black'};
`;

function isHoliday(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const holidays = [
    `${year}-01-01`,
    `${year}-03-01`,
    `${year}-05-05`,
    `${year}-06-06`,
    `${year}-08-15`,
    `${year}-10-03`,
    `${year}-10-09`,
    `${year}-12-25`,
  ];
  const dateString = `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`;
  return holidays.includes(dateString) || date.getDay() === 0;
}

function WeeklyCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
  const { startOfWeek, endOfWeek } = calculateWeekDates(startDate);
  const days = [];
  let currentDate = new Date(startOfWeek);

  const handleDayClick = (date) => {
    console.log(`날짜를 클릭했습니다: ${date}`);
  };

  const handlePrevWeek = () => {
    const prevWeekStartDate = new Date(startDate);
    prevWeekStartDate.setDate(startDate.getDate() - 7);
    setStartDate(prevWeekStartDate);
  };

  const handleNextWeek = () => {
    const nextWeekStartDate = new Date(startDate);
    nextWeekStartDate.setDate(startDate.getDate() + 7);
    setStartDate(nextWeekStartDate);
  };

  while (currentDate <= endOfWeek) {
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    days.push(
      <CalendarButton id = 'CalendarButton'
        className="calendar-day"
        key={currentDate.toISOString()}
        onClick={() => handleDayClick(currentDate)}
        isToday={currentDate.toDateString() === today.toDateString()}
        isSaturday={currentDate.getDay() === 6}
        isHoliday={isHoliday(currentDate)}
      >
        <div>{dayOfWeek}</div>
        {currentDate.getDate()}
      </CalendarButton>
      
    );

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <WeeklyCalendarContainer id = 'WeeklyCalendarContainer'>
    <div style={{ width: '100%' }} className="weekly-calendar">
      <DayButtons id = 'DayButtons'>
        <IconButton onClick={handlePrevWeek}>
          <ArrowBackIcon />
        </IconButton>
        <div>
      </div>
      <div className="calendar-body" style={{ width:'100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {days}
      </div>
      <IconButton onClick={handleNextWeek}>
          <ArrowForwardIcon />
        </IconButton>
    </DayButtons>
    </div>
    </WeeklyCalendarContainer>
  );
}

const Calendar = () => {
  return (
    <StyledCalender id = 'StyledCalender'>
      <CalenderContainer id = 'CalenderContainer'>
        <WeeklyCalendar />
      </CalenderContainer>
    </StyledCalender>
  );
};

export default Calendar;