import TailButton  from "../UI/TailButton" ;
import TailBall from "./TailBall";

import { useState } from "react";

export default function Lotto() {
  //state변수는 useState Hook으로 만듬
  const [tags, setTags] = useState();

  const handleClick = () => {
    console.log('handleClick1')
    let n = Math.floor(Math.random() * 45) + 1 ; //1~45 랜덤수 생성
    setTags(<h1 className="text-3xl">{n}</h1>);
  }

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center mb-10">
        {tags}       
      </div>     
      <div className="w-full flex justify-center items-center mb-10">
        <TailButton caption='로또번호생성' 
                    color='blue' 
                    handleClick = {handleClick} /> 
      </div>
    </div>
  )
}
