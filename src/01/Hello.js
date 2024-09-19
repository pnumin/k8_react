function Hello() {
  let today = new Date();
  today = today.toLocaleString() ;

  let name = '' ;
  return (
    // jsx는 반드시 하나의 태그만 return
    // fragment tag : <></> 
    // class 속성은 반드시 className으로 사용
    <>
      <p className='p1'>
        Hello React!!
      </p>
      <p className="text-4xl text-yellow-400">
        {name === 'PNU' ? '부산대학교 김경민' : '김경민'}
      </p>
      <p style={{backgroundColor:'gray', color:'white'}}>
        {/* {new Date().toLocaleString()} */}
        {today}
      </p>
    </>
  );
}

export default Hello;