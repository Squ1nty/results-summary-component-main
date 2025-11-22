function OverallResult({ avgResult }){
  return(
    <div className='flex flex-col'>
      <h1>Your Result</h1>
      <div>
        <p>{avgResult}</p>
        <p>of 100</p>
      </div>
      <p>Great</p>
      <p>You scored higher than 65% of the people who have taken these tests</p>
    </div>
  );
}

export default OverallResult