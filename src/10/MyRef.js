import TailButton from "../UI/TailButton" ;
export default function MyRef() {

  const handleBClick = () =>{

  }
  const handleSClick = () =>{
    
  }
  const handleRClick = () =>{
    
  }
  return (
    <div className="w-3/5 grid grid-cols-3 gap-4 mt-10">
      <div className="text-xl font-bold text-blue-800">
        컴포넌트 변수 : 
      </div>
      <div className="text-xl font-bold text-orange-800">
        State 변수 : 
      </div>
      <div className="text-xl font-bold text-lime-800">
        Ref 변수 : 
      </div>
      <div>
          <TailButton caption = '컴포넌트 변수'
                      color = 'blue'
                      handleClick = {handleBClick} />
      </div>
      <div>
        <TailButton caption = 'State 변수'
                        color = 'orange'
                        handleClick = {handleSClick} />
      </div>
      <div>
        <TailButton caption = 'Ref 변수'
                        color = 'lime'
                        handleClick = {handleRClick} /> 
      </div>
    </div>
  )
}
