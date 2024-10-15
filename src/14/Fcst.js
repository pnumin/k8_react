import TailButton from "../UI/TailButton" ;

export default function Fcst() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-center text-3xl my-10 font-bold">
        일기예보선택
      </h1>
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <input type='date' 
              className="form-input w-full"
               id = 'txt1' />
        <select className="form-select  w-full">
            <option value=''>--지역을 선택하세요.</option>
        </select>
        <TailButton caption = '초단기예보'
                      color = 'blue'
                      handleClick = ''
                      size = 'w-1/2'/>
        <TailButton caption = '단기예보'
                      color = 'blue'
                      handleClick = ''
                      size = 'w-full'/>
      </div>
    </div>
  )
}
