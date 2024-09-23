import MyListData from './MyListData.json' ;

export default function MyList() {
  console.log(MyListData)
  MyListData.map( item => console.log(item.title)) ;

  return (
    <div className='w-full'>
      <div className='w-full 
                      border border-gray-300
                      flex justify-center items-center'>
        <div className='w-1/3 flex justify-center items-start'>
        이미지
        </div>                
        <div className='w-2/3 flex flex-col justify-between items-center'>
          <div>
            <div>
              title
            </div>
            <div>
              content
            </div>
          </div>
          <div>
            <span>❤️</span>
            <span>좋아요</span>
            <span>0</span>
          </div>
        </div>                
      </div>
    </div>
  )
}
