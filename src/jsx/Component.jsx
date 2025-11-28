import { useState, useEffect } from 'react'
import SummaryDetails from './SummaryDetails';

function Component(){
  const [data, setData] = useState(null);
  let avg = 0;

  function getAverage(){
    data && data.map(dataItem => {
      avg += dataItem.score;
    })
    return JSON.stringify((avg/4).toFixed(0)).replaceAll(`"`, "");
  }

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
    <div className='flex flex-col max-w-[768px] bg-white md:justify-self-center lg:grid lg:grid-cols-2 lg:place-self-center lg:rounded-r-[25px]'>
      <div className='grid place-items-center gap-5 text-center py-8 px-12 bg-gradient-to-b from-[var(--light-slate-blue)] to-[var(--light-royal-blue)] rounded-b-[25px] text-white lg:rounded-[25px] lg:px-14'>
        <h1 className='lg:text-lg'>Your Result</h1>
        <div className='flex flex-col gap-2 px-10 py-7 rounded-[50%] bg-gradient-to-t from-[var(--persian-blue)] to-[var(--violet-blue)] lg:px-12 lg:py-9'>
          <p className='text-5xl font-[700] lg:text-6xl'>{getAverage()}</p>
          <p className='text-[var(--light-lavendar)] text-sm font-[500]'>of 100</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-xl font-[700] lg:text-2xl'>Great</p>
          <p className='text-[var(--light-lavendar)] text-sm font-[500] lg:text-base'>You scored higher than 65% of the people who have taken these tests</p>
        </div>
      </div>
      <div className='flex flex-col gap-5 w-full p-7'>
        <h2 className='text-base font-[700] text-[var(--dark-gray-blue)]'>Summary</h2>
        <div className='flex flex-col gap-3 w-full'>
          {data && data.map(dataItem => (
            <SummaryDetails category={dataItem.category} key={dataItem.category} score={dataItem.score} icon={dataItem.icon} />
          ))}
        </div>
        <button className='w-full py-3 rounded-[75px] bg-gradient-to-t from-[var(--dark-gray-blue)] to-[var(--dark-gray-blue)] text-white text-base font-[500] outline-none [ hover:from-[var(--light-royal-blue)] hover:to-[var(--light-slate-blue)] focus:from-[var(--light-royal-blue)] focus:to-[var(--light-slate-blue)] ]'>Continue</button>
      </div>
    </div>
  );
}

export default Component