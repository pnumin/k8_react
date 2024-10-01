import MyDiv3 from "./MyDiv3" ;
// export default function MyDiv2(props) {
export default function MyDiv2({dn1, dn2, dn3}) {
  // console.log(props)
  return (
    <div className="w-4/6 h-4/6 
                    flex flex-col justify-center items-center
                    bg-lime-600 text-white font-bold">
      <div className="w-full h-10 p-5 m-2
                      flex justify-start items-center ">
        {/* {`${props.dn1} > ${props.dn2}`} */}
        {`${dn1} > ${dn2}`}
      </div>
      
      {/* <MyDiv3 dn1={props.dn1} dn2={props.dn2} dn3={props.dn3} /> */}
      <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3} />
    </div>
  )
}
