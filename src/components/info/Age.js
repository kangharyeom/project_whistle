export const AgeComponent = ({ homeTeamAgeType }) => {
    const getAgeText = (type) => {
      switch (type) {
        case 'TEENAGER':            return '10대';
        case 'UNIVERSITY_STUDENT':  return '대학생';
        case 'TWENTIES':            return '20대';
        case 'OFFICE_WORKER':       return '회사원';
        case 'EARLY_SOCCER':        return '조기축구회';
        case 'THIRTIETH':           return '30대';
        case 'FORTIES':             return '40대';
        case 'FIFTIES':             return '50대';
        
        default:                    return 'Error';
      }
    };
    return <>{getAgeText(homeTeamAgeType)}</>;
  };