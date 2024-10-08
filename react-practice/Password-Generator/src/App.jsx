import { useCallback, useState , useEffect ,useRef} from 'react'
import { LampDemo } from './components/ui/Lamp'
import { CardContainer , CardBody , CardItem } from './components/ui/Back'
import dog77 from './assets/dog77.png'
import { TypewriterEffect, TypewriterEffectSmooth } from './components/ui/TypeEffect'
import { TextRevealCard, TextRevealCardDescription , TextRevealCardTitle } from './components/ui/Text-reveal'
import { InfiniteMovingCards } from './components/ui/Moving-cards'



function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed){
      str+="0123456789"
    }

    if (charAllowed){
      str+="!@#$%^&*-_+=[]{}~`"
    }

    for(let i=1;i< length;i++){
      let char = Math.floor(Math.random() * str.length)
      pass+=str.charAt(char)
    }

    setPassword(pass)  //generated password is set and used in to render on the ui

  } , [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()} , [length,numberAllowed,charAllowed,passwordGenerator])   // function and dependencies
  const words = [
    {
      text: "Build ",
    },
    {
      text: "awesome ",
    },
    {
      text: "apps ",
    },
    {
      text: "with ",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <>
      
      <LampDemo/>
      <CardContainer/>
      <div className='w-full  flex justify-center items-center '>
        <div className='bg-slate-800   py-10 mt-24 rounded-lg px-9 shadow-xl ring-1 ring-slate-900/5'>
          <h1 className='text-4xl text-blue-300 text-center '>Password Generator</h1>
          <div className='flex justify-center '>
            <div>
              <input type="text" value={password} placeholder='password' className='rounded-lg mt-4 py-2 px-6 outline-none ' readOnly ref={passwordRef}  />
            </div>
            <div>
              <button className='bg-blue-300 rounded-lg px-2 py-2 mt-4 ml-1 shrink-0 ' onClick={copyPasswordToClip}>Copy</button>
            </div>
          </div>

          <div className='flex-1 flex justify-evenly gap-x-2 text-white mt-6'>
            <div>
              <input type="range" min={8} max={50} className='cursor-pointer' onChange={(e)=>{setLength(Number(e.target.value))}} />
              <label > Length :{length}</label>
            </div>

            <div className='gap-x-1'>
              <input type="checkbox" name="numberallowed or no" id="hh" onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
              <label >Numbers</label>
            </div>

            <div className='gap-x-1'>
              <input type="checkbox" name="charallowed or no" id="cc" onChange={()=>setCharAllowed((prev)=>!prev)} />
              <label >Char</label>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-10">
      <CardContainer className="inter-var h-[600px] w-[120%]">
              <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[30] sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className='w-full flex justify-center items-center mt-8'>
                  <img
                    src={dog77}
                    height="900"
                    width="900"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                  <h1 className='text-xl font-semibold gap-x-2 px-2'>Happy to integrate you into the 3D card</h1>
                </CardItem>
                



              </CardBody>
            </CardContainer>
              
            </div>
            <div>
                <TypewriterEffectSmooth words={words}/>
              </div>

            <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem]  w-full">
              <TextRevealCard text="Slide to look at Question" revealText="What are you llook dsdvsfvdbgm hn">
                <TextRevealCardTitle>What is Pawnter?</TextRevealCardTitle>
                <TextRevealCardDescription>Pawnter is your furry friend</TextRevealCardDescription>
              </TextRevealCard>
            </div>

            <div className='h-[40rem] bg-black overflow-hidden p-x-2 flex flex-col justify-center items-center'>
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
    </>
  )
}

export default App
