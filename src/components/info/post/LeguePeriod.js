import React from 'react';
import DatePicker from 'react-datepicker';

export const LeaguePeriodPostComponent = ({ period, setPeriod }) => {
    const handleInputChange = (period) => {
        setPeriod(period);
      };
      
  return (
    <>
        <DatePicker
            selected={period}
            onChange={handleInputChange}
            dateFormat="yyyy/MM/dd" // 날짜 표시 형식 설정 (원하는 형식으로 변경 가능)
            placeholderText="날짜를 선택하세요"
        />
    </>
  );
};
