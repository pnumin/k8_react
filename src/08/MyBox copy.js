import { useState, useEffect } from "react" ;

export default function MyBox() {
  const [blueFlag, setBlueFlag] = useState(false) ;
  const [orangeFlag, setOrangeFlag] = useState(false) ;

  const handleBlue = () => {
    setBlueFlag(!blueFlag);
    console.log('handleBlue =>',blueFlag);
  }

  const handleOrange = () => {
    setOrangeFlag(!orangeFlag);
    console.log('handleBlue =>',orangeFlag);
  }

  useEffect(() =>{
    console.log('useEffect blue =>', blueFlag)
  }, [blueFlag]);

  useEffect(() =>{
    console.log('useEffect orange =>', orangeFlag)
  }, [orangeFlag]);

  useEffect(() =>{
    console.log('useEffect =>', blueFlag)
    console.log('useEffect =>', orangeFlag)
  });


  return (
    <div className="w-full h-full 
                    flex justify-center items-center">
      <div className={`w-1/3 ${blueFlag ? 'bg-blue-500' : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
        <h1 className="flex justify-center items-center
                      text-3xl font-bold bg-white
                      p-5 m-5 text-blue-700
                      border border-slate-600 rounded-md
                      ">
          Blue
        </h1>
        <div className="flex justify-center items-center
                      text-xl font-bold
                      border border-blue-600  bg-blue-50 rounded-md
                      p-5 m-5"
             onClick={handleBlue}>
          Blue Toggle
        </div>
      </div>      
      <div className={`w-1/3 ${orangeFlag ? 'bg-orange-500' : ''}
                      flex flex-col justify-center items-center
                      border border-slate-400 rounded-md
                      p-5 m-5`}>
        <h1 className="flex justify-center items-center
                      text-3xl font-bold bg-white
                      p-5 m-5 text-orange-700
                      border border-slate-600 rounded-md
                      ">
          orange
        </h1>
        <div className="flex justify-center items-center
                      text-xl font-bold
                      border border-orange-600  bg-orange-50 rounded-md
                      p-5 m-5"
             onClick={handleOrange}>
          orange Toggle
        </div>
      </div>         
    </div>
  )
}
