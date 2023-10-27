export const RecordComponent = ({ 
    winRecord, 
    drawRecord, 
    loseRecord }) => {
  return (
    <div id='Record'>
      {winRecord + 
      drawRecord + 
      loseRecord}전 
      {winRecord}승 
      {drawRecord}무 
      {loseRecord}패
    </div>
  );
};