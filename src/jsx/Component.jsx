let jsonArray;

fetch('../../data.json')
  .then(response => response.json())
  .then(jsonArray);

console.log(jsonArray);

function Component(){
  return(
    <div className='flex flex-col max-w-[750px] lg:flex-row'>
      <div className='flex flex-col'>
        <h1>Your Result</h1>
        <div>
          <p></p>
          <p>of 100</p>
        </div>
        <p>Great</p>
        <p>You scored higher than 65% of the people who have taken these tests</p>
      </div>
      <div></div>
    </div>
  );
}

export default Component