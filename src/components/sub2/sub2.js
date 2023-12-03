import React,{useState} from 'react'

import SubApi from './subApi'

export default function Sub2(){
  return (
    <div className='mt-40 '>
      <h1 className='text-4xl  ml-2 sm:text-8xl'>Whats Good About React?</h1>
      <p className='text-lg ml-5 mr-2 mt-5 sm:text-2xl lg:text-4xl'>One of the key concepts in React is the use of reusable components, which are modular, self-contained building blocks that encapsulate a piece of the user interface and its behavior. This promotes a more maintainable and scalable codebase. Components can be composed together to create complex UIs, and React efficiently updates and renders the DOM as the state of these components changes.</p>
      

<p className='text-lg ml-5 mr-2 mt-5 mb-5 sm:text-2xl lg:text-4xl'>React also introduces a virtual DOM, a lightweight representation of the actual DOM. This allows React to efficiently update only the parts of the DOM that have changed, minimizing the performance overhead associated with frequent updates.</p>
<SubApi/>
<div className='sm:flex mt-10 sm:mt-14'>
  <p className='text-lg mb-3 mr-2 ml-5 sm:text-2xl lg:text-4xl'>The library follows a unidirectional data flow, making it easier to understand how data changes and propagates through an application. State management in React is typically managed through component state and, for more complex applications, state management libraries like Redux can be integrated.</p>

<p className='text-lg ml-5  sm:text-2xl mr-2 lg:text-4xl'>React has a vibrant ecosystem with a vast collection of third-party libraries and tools, making it well-suited for building a variety of applications, from single-page applications (SPAs) to progressive web apps (PWAs) and mobile applications using React Native.</p>
</div>

<hr className='w-[60%] mx-auto my-8'/>
<div className='flex flex-col'>
  <FrameworkHistogram/>
  <p className='text-center sm:text-xl mt-1'>popularity (%)</p>
  <hr className='w-[60%] mx-auto my-8'/>
  <p className='text-lg ml-5 mr-2 mt-2 sm:text-2xl lg:text-4xl'>React has played a significant role in shaping modern web development practices and has influenced the development of other frontend frameworks and libraries. Its active community and continual updates contribute to its staying power and ongoing relevance in the ever-evolving landscape of web development.*Note that the above diagram is just for display and no real values or api calls where used for this just hard code!</p>
 <Dice/>
</div>
<hr className='w-[60%] mx-auto my-8 '/>
    </div>
  )
}



const FrameworkHistogram = () => {
  const frameworkData = [
    { name: 'React', popularity: 78 },
    { name: 'Vue', popularity: 25 },
    { name: 'Angular', popularity: 60 },
    { name: 'Svelte', popularity: 45 },
    { name: 'Next.js', popularity: 85 },
    { name: 'NestJS', popularity: 50 },
    // Add more frameworks as needed
  ];

  const maxPopularity = Math.max(...frameworkData.map((framework) => framework.popularity));

  return (
    <div className="flex h-[300px] sm:w-[400px] w-[300px] self-center justify-around items-end mt-8">
      {frameworkData.map((framework) => (
        <div
          key={framework.name}
          className="histogram-bar bg-blue-500 p-2 text-center"
          style={{ height: `${(framework.popularity / maxPopularity) * 100}%` }}
        >
          <span className="bar-label text-white text-xs">{framework.name}</span>
        </div>
      ))}
    </div>
  );
};



const Dice = ()=>{
  const [dice,setDice] = useState({
    1:Number(Math.floor(Math.random()*5+1)),
    2:Number(Math.floor(Math.random()*5+1)),
    3:Number(Math.floor(Math.random()*5+1)),
    4:Number(Math.floor(Math.random()*5+1)),
    5:Number(Math.floor(Math.random()*5+1)),
    6:Number(Math.floor(Math.random()*5+1))
  })

  const handleDice = (nuum) => {
    for (let i = 1; i <= 6; i++) {
     if(dice[nuum]===6){
         setDice({
          ...dice,
          [nuum]:6
        })
      }else if(nuum === 'del'){
        setDice({
          1:Number(Math.floor(Math.random()*5+1)),
          2:Number(Math.floor(Math.random()*5+1)),
          3:Number(Math.floor(Math.random()*5+1)),
          4:Number(Math.floor(Math.random()*5+1)),
          5:Number(Math.floor(Math.random()*5+1)),
          6:Number(Math.floor(Math.random()*5+1))
        })
      }else{
        setDice({
          ...dice,
          [nuum]:Math.floor(Math.random()*6+1)
        })
      }
      
    }
   
    
     
   
  };



  return(
    <div className='select-none bg-slate-400 rounded-lg p-3 text-center mx-auto sm:w-[400px] mt-24 w-60'>
      <h1 className='text-xl sm:text-4xl'>Dice Game</h1>
      <p>touch a dice to roll</p>
      <p className='text-sm text-green-800'>make 'em all 6</p>
      <div className='flex sm:h-20 h-12 mt-3 justify-center gap-3'>
      <div onClick={()=>{handleDice(1)}} className={`${dice[1] ===6 && 'bg-purple-900 hover:bg-purple-900'} cursor-pointer active:bg-slate-600 basis-1/3 flex justify-center sm:text-4xl items-center text-lg font-bold rounded-lg hover:bg-cyan-500 transition hover:scale-105 bg-white text-center p-auto `}>{dice[1]}</div>
      <div onClick={()=>{handleDice(2)}} className={`${dice[2] ===6 && 'bg-purple-900 hover:bg-purple-900'} cursor-pointer active:bg-slate-600 basis-1/3 flex justify-center sm:text-4xl items-center text-lg font-bold rounded-lg hover:bg-cyan-500 transition hover:scale-105 bg-white text-center p-auto `}>{dice[2]}</div>
      <div onClick={()=>{handleDice(3)}} className={`${dice[3] ===6 && 'bg-purple-900 hover:bg-purple-900'} cursor-pointer active:bg-slate-600 basis-1/3 flex justify-center items-center sm:text-4xl text-lg font-bold rounded-lg hover:bg-cyan-500 transition hover:scale-105 bg-white text-center p-auto `}>{dice[3]}</div>
      </div>
      <div className='flex sm:h-20 h-12 mt-3 justify-center gap-3'>
      <div onClick={()=>{handleDice(4)}} className={`${dice[4] ===6 && 'bg-purple-900 hover:bg-purple-900'} cursor-pointer active:bg-slate-600 basis-1/3  flex justify-center items-center text-lg sm:text-4xl font-bold rounded-lg hover:bg-cyan-500 transition hover:scale-105 bg-white text-center p-auto `}>{dice[4]}</div>
      <div onClick={()=>{handleDice(5)}} className={`${dice[5] ===6 && 'bg-purple-900 hover:bg-purple-900'} cursor-pointer active:bg-slate-600 basis-1/3 flex justify-center items-center text-lg font-bold rounded-lg sm:text-4xl hover:bg-cyan-500 transition hover:scale-105 bg-white text-center p-auto `}>{dice[5]}</div>
      <div onClick={()=>{handleDice(6)}} className={`${dice[6] ===6 && 'bg-purple-900 hover:bg-purple-900'} cursor-pointer active:bg-slate-600 sm:text-4xl flex justify-center items-center text-lg font-bold rounded-lg hover:bg-cyan-500 transition hover:scale-105 bg-white text-center p-auto basis-1/3`}>{dice[6]}</div>
      </div>
      <button onClick={()=>{handleDice('del')}} className='mt-2 px-4 bg-cyan-600 rounded-lg p-2 text-xl text-white active:bg-purple-800 hover:bg-slate-700 transition sm:mb-8 sm:mt-10 sm:scale-150 '>reset</button>
    </div>
  )
}