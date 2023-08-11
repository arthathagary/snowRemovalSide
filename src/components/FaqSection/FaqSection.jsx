"use client";
import React,{useState} from "react";
import quizes from "./quiz";
const FaqSection = () => {

  const [click,setClick] = useState(null);
  const [click2,setClick2] = useState(null);
  const handleClick = (index)=> {
    if(click === index){
      setClick(null);
    }else{
      setClick(index);
    }
    
  }
  
  // const ref = useRef(null);
  // const isView = useInView(ref,{once:true});

  // const controlAnimation = useAnimation();

  // useEffect(()=>{
  //   if (isView){
  //     controlAnimation.start("visible")
  //   }else{
  //     controlAnimation.start("hidden")
  //   }
  // },[isView])
  return (
    <div id="faq" className=' w-full md:px-32 px-8 mt-8 bg-[#DAF3F4] py-8'>
    <div>
        <h2 className="text-center">Frequently Asked Questions</h2>
        
            <div>
            {quizes.map((quiz,index)=>{
              return <div key={quiz.id}> <h5 className='flex items-center justify-between gap-4 font-extrabold mb-4' onClick={()=>handleClick(index)}><span className='cursor-pointer'>{quiz.question}</span><span className='text-xl cursor-pointer'>{click===index?'-':'+'}</span></h5>
                <h6 className={click === index ?'block':'hidden'}>{quiz.answer}</h6> 
                <hr className="w-full h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                </div>
            })}
            </div>
           
        
    </div>
    </div>
   
  )
}

export default FaqSection