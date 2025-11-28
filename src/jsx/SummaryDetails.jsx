function SummaryDetails({ category, score, icon }){
  
  function colorTheme(type){
    if(type === "text"){
      if(JSON.stringify(category) === `"Reaction"`){
        return "var(--light-red)";
      }
      else if(JSON.stringify(category) === `"Memory"`){
        return "var(--orangey-yellow)";
      }
      else if(JSON.stringify(category) === `"Verbal"`){
        return "var(--green-teal)";
      }
      else if(JSON.stringify(category) === `"Visual"`){
        return "var(--cobalt-blue)";
      }
    }
    else if(type === "bg"){
      if(JSON.stringify(category) === `"Reaction"`){
        return "var(--light-red-bg)";
      }
      else if(JSON.stringify(category) === `"Memory"`){
        return "var(--orangey-yellow-bg)";
      }
      else if(JSON.stringify(category) === `"Verbal"`){
        return "var(--green-teal-bg)";
      }
      else if(JSON.stringify(category) === `"Visual"`){
        return "var(--cobalt-blue-bg)";
      }      
    }
  }
  
  return(
    <div className={`flex space-between w-full p-4 rounded-[15px]`} style={{ backgroundColor: colorTheme("bg") }}>
      <div className='flex gap-3 w-full'>
        <img src={JSON.stringify(icon).replaceAll(`"`, "")}></img>
        <p style={{ color: colorTheme("text") }}>{JSON.stringify(category).replaceAll(`"`, "")}</p>
      </div>
      <div className='flex w-full justify-end'>
        <p className='font-[700]'>{JSON.stringify(score)}<span className='opacity-40'> / 100</span></p>
      </div>
    </div>
  );
}

export default SummaryDetails