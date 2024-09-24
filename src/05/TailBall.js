
export default function TailBall({n}) {
  const ballColor = {
    'b0' : 'bg-red-800' ,
    'b1' : 'bg-yellow-800',
    'b2' : 'bg-lime-800',
    'b3' : 'bg-sky-800' ,
    'b4' : 'bg-purple-800'
  }
  return (
    <div className={`w-20 h-20 m-2
                    flex justify-center items-center
                    rounded-full
                    ${ballColor['b'+ Math.floor(n / 10)]}
                    text-white font-bold text-2xl
                    `}>
      {n}
    </div>
  )
}
