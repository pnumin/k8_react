import TailButton from "../UI/TailButton" ;
export default function RouteNav() {
  return (
    <div className="w-full grid grid-cols-3 gap-2 mt-10">
        <TailButton caption = '홈'
                      color = 'blue'
                      handleClick = '' 
                      size = 'w-full'/>
        <TailButton caption = 'page1'
                      color = 'blue'
                      handleClick = '' 
                      size = 'w-full'/>
        <TailButton caption = 'page2'
                      color = 'blue'
                      handleClick = ''
                      size = 'w-full'/>
    </div>
  )
}
