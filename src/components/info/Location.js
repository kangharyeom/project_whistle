export const LocationComponent = ({ locationType }) => {
    const getLocationText = (type) => {
      switch (type) {
        case 'SEOUL':           return '서울';
        case 'INCHEON':         return '인천';
        case 'DAEGU':           return '대구';
        case 'BUSAN':           return '부산';
        case 'GWANGJU':         return '광주';
        case 'DAEJEON':         return '대전';
        case 'GYEONGGI':        return '경기도';
        case 'JEJU':            return '제주';
        case 'ULSAN':           return '울산';
        case 'CHUNGCHEONGNAM':  return '충청남도';
        case 'CHUNGCHEONGBUK':  return '충청북도';
        case 'GYEONGSANGBUK':   return '경상북도';
        case 'GYEONGSANGNAM':   return '경상남도';
        case 'JEOLLABUK':       return '전라북도';
        case 'JEOLLANAM':       return '전라남도';
        case 'GANGWON':         return '강원도';

        default:                return 'Error';
      }
    };
    return <>{getLocationText(locationType)}</>;
};