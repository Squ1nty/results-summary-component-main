function SummaryDetails({ category, score, icon }){
  return(
    <div className='flex space-between w-full'>
      <div className='flex w-full'>
        <img src={JSON.stringify(icon).replaceAll(`"`, "")}></img>
        {JSON.stringify(category).replaceAll(`"`, "")}
      </div>
      <div className='w-full'>
        {JSON.stringify(score)} / 100
      </div>
    </div>
  );
}

export default SummaryDetails