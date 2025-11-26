import { useState, useEffect } from 'react'
import SummaryDetails from './SummaryDetails';

function Component(){
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetch('/data.json');
        const responseJSON = await response.json();

        setData(responseJSON);
      }
      catch(error){
        console.log("Error: " + error);
      }
    }

    fetchData();
  }, []);

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
      <div className='w-full'>
        <h2>Summary</h2>
        <div className='w-full'>
          {data && data.map(dataItem => (
            <SummaryDetails category={dataItem.category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Component