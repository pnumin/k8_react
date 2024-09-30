import { useEffect, useState } from "react" ; 
export default function BoxOffice() {

  //맨처음 한번 실행
  useEffect(()=>{
    const apiKey = process.env.REACT_APP_MV_KEY ;
    console.log('apiKey=', apiKey) ;
  }, []);
 

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
       
      </div>
    </div>
  )
}