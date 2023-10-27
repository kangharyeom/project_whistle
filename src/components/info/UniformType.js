import styled from 'styled-components';

const Circle = styled.div`
width: 20px;
margin-top: 25%;
height: 20px;
border-radius: 50%;
background-color: ${({ color }) => color || 'transparent'};
display: flex;
justify-content: center;
align-items: center;
`;

export const UniformTypeComponent = ({ uniformType }) => {
  const getUniformTypeText = (type) => {
    switch (type) {
      case 'NONE':           return <><Circle color="NONE" /></> ;
      case 'RED':           return <><Circle color="RED" /></> ;
      case 'ORANGE':           return <><Circle color="ORANGE" /></> ;
      case 'YELLOW':           return <><Circle color="YELLOW" /></> ;
      case 'GREEN':           return <><Circle color="GREEN" /></> ;
      case 'BLUE':           return <><Circle color="BLUE" /></> ;
      case 'PURPLE':           return <><Circle color="PURPLE" /></> ;
      case 'BLACK':           return <><Circle color="BLACK" /></> ;
      case 'WHITE':           return <><Circle color="WHITE" /></> ;
      case 'SKY_BLUE':           return <><Circle color="SKY_BLUE" /></> ;
      case 'GRAY':           return <><Circle color="GRAY" /></> ;

      default:                return 'Error';
    }
  };
  return <>{getUniformTypeText(uniformType)}</>;
};