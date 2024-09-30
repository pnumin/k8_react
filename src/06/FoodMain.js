import fooddata from './fooddata.json' ;
import FoodCard from './FoodCard';
import TailButton from '../UI/TailButton';

import { useState} from 'react';

export default function FoodMain() {
  const [tags, setTags] = useState() ;
 
  //운영주체 분류를 중복 제거하여 버튼으로 만들기
  let tm = fooddata.map(item => item["운영주체 분류"].replace(' ', ''));
  tm = [...new Set(tm)] ;

  const bts = tm.map(item => <TailButton 
                        key = {item}
                        caption = {item}
                        color = 'blue'
                        handleClick = {()=>handleFood(item)}
                      />);

  const handleFood = (item) => {
    let tm = fooddata.filter(i => i["운영주체 분류"].replace(' ', '') === item)
                     .map(i => <FoodCard obj={i} key={i.사업장명} />)
    setTags(tm);
  }  

  return (
    <div className='w-full flex flex-col justify-start'>
      <div className='w-full h-20 bg-blue-100
                      flex justify-center items-center'>
        {bts}
      </div>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4 p-4 overscroll-y-contain'>
        {tags}
      </div>
    </div>
  )
}
