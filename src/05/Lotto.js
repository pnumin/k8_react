import TailButton  from "../UI/TailButton" ;

export default function Lotto() {
  return (
    <div>
      Lotto      
      <div>
        <TailButton caption='로또번호생성' color='blue' />
        <TailButton caption='로또번호지우기' color='orange' />
      </div>
    </div>
  )
}
