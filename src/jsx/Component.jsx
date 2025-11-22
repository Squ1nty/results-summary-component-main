import OverallResult from './OverallResult'
import DetailedResult from './DetailedResult'

let jsonArray;

fetch('../../data.json')
  .then(response => response.json())
  .then(jsonArray);

console.log(jsonArray);

function Component(){
  return(
    <div className='flex flex-col max-w-[750px] lg:flex-row'>
      <OverallResult />
      <DetailedResult />
    </div>
  );
}

export default Component