import TailButton from "../UI/TailButton" ;
import { useState, useEffect, useRef } from "react";
export default function Rest() {
  //화면 재랜더링을 위한 state변수
  const [tdata, setTdata] = useState([]);
  const [trs, setTrs] = useState([]) ;
  
  //입력값을 제어하기 위한 ref변수
  const txt1Ref = useRef();
  const txt2Ref = useRef();

  //restfull endpoint 주소
  const url = 'http://localhost:3005/posts';

  //컴포넌트 생성시 실행
  useEffect(()=>{
    //데이터 가져오기
    
  }, []);

  //tdata가 변경이 되었을 때 실행
  useEffect(()=>{}, [tdata]);

  //컴포넌트가 재랜더링 될때 마다 실행
  //useEffect(()=>{});
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text" 
            ref = {txt1Ref}
            className="form-input  w-full"
              />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            ref = {txt2Ref}
            className="form-input w-full"
              />
        </div>
        <TailButton caption='입력'
                      color='blue'
                      handleClick=''
                      size='w-1/2' /> 
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  )
}
