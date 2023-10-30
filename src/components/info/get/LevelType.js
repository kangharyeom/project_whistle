export const LevelComponent = ({ levelType }) => {
    const getLevelText = (type) => {
      switch (type) {
        case 'LOWEST':    return '최하';
        case 'LOWER':     return '하';
        case 'MIDDLE':    return '중';
        case 'UPPER':     return '상';
        case 'HIGHEST':   return '최상';
        
        default:                    return 'Error';
      }
    };
    return <>{getLevelText(levelType)}</>;
};