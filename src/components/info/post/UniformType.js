import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const locationTypeOptionsKorean = {
  SEOUL: '서울',
  INCHEON: '인천',
  DAEGU: '대구',
  BUSAN: '부산',
  GWANGJU: '광주',
  DAEJEON: '대전',
  GYEONGGI: '경기도',
  JEJU: '제주도',
  ULSAN: '울산',
  CHUNGCHEONGNAM: '충청남도',
  CHUNGCHEONGBUK: '충청북도',
  GYEONGSANGBUK: '경상북도',
  GYEONGSANGNAM: '경상남도',
  JEOLLABUK: '전라북도',
  JEOLLANAM: '전라남도',
  GANGWON: '강원도',
};

const locationTypeOptions = ['SEOUL', 'INCHEON', 'DAEGU', 'BUSAN', 'GWANGJU', 'DAEJEON', 'GYEONGGI', 'JEJU', 'ULSAN', 'CHUNGCHEONGNAM', 'CHUNGCHEONGBUK', 'GYEONGSANGBUK', 'GYEONGSANGNAM', 'JEOLLABUK', 'JEOLLANAM', 'GANGWON'];

export const LocationTypePostComponent = ({ locationType, setLocationType }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setLocationType(value);
  };

  return (
    <Select size='small' name="locationType" value={locationType} onChange={handleInputChange}>
      {locationTypeOptions.map((option) => ( 
      <MenuItem key={option} value={option}>
        {locationTypeOptionsKorean[option]}
      </MenuItem> 
      ))}
    </Select>
  );
};
