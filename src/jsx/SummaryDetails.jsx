function SummaryDetails({ category }){
  return(
    <div className='flex space-between w-full'>
      <div className='w-full'>
        {JSON.stringify(category).replaceAll(`"`, "")}
      </div>
      <div className='w-full'>
        Poop
      </div>
    </div>
  );
}

export default SummaryDetails