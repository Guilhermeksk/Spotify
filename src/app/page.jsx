import Image from 'next/image'
import { Maximize2, Volume, Search, Library, HomeIcon, Play, ChevronLeft, ChevronRight, Shuffle, SkipBack, SkipForward, Repeat, LayoutList, Mic2, Laptop2 } from 'lucide-react';


export default function Home() {
  return (
<div className='h-screen flex flex-col'>
  <div className='flex flex-1'>

    <aside className='w-56 bg-zinc-950 p-6'>
      <nav className='space-y-3'>
        <a href="" className='text-sm flex items-center gap-2 text-zinc-200 '>
        <HomeIcon/>
          home</a>
        <a href="" className='text-sm flex items-center gap-2 text-zinc-200'>
          <Search/>
          search</a>
        <a href="" className='text-sm flex items-center gap-2 text-zinc-200'>
          <Library/>
          your library</a>
      </nav>
      <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-4'>
        <a className= 'text-sm text-zinc-400 hover:text-zinc-100'>playlist 1</a>
        <a className= 'text-sm text-zinc-400 hover:text-zinc-100'>playlist 1</a>
        <a className= 'text-sm text-zinc-400 hover:text-zinc-100'>playlist 1</a>
        <a className= 'text-sm text-zinc-400 hover:text-zinc-100'>playlist 1</a>
        <a className= 'text-sm text-zinc-400 hover:text-zinc-100'>playlist 1</a>
        <a className= 'text-sm text-zinc-400 hover:text-zinc-100'>playlist 1</a>

      </nav>
      </aside>

    <main className='flex-1 p-6'>
      <div className='flex items-center gap-4'>
        <button className='p-1 rounded-full bg-black/40'  >
          <ChevronLeft/>
        </button>
        <button className='p-1 rounded-full bg-black/40'>
        <ChevronRight/>
        </button>
      </div>
      <h1 className='font-semibold text-3xl mt-5'>Boa noite</h1>
      <div className='grid grid-cols-3 gap-4 overflow-hidden mt-4'>
<a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 hover:bg-white/20 trasition-colors'>
  <img src= "/kay.jpg" width={80} height={80} alt='kayblack' />
   <strong>this is kayblack</strong>
   <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-30">
    <Play />
   </button>
   </a>
<a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 hover:bg-white/20 trasition-colors'>
  <img src= "/kay.jpg" width={80} height={80} alt='kayblack' />
   <strong>this is kayblack</strong>
   <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-30'>
    <Play />
   </button>
   </a>
<a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 hover:bg-white/20 trasition-colors'>
  <img src= "/kay.jpg" width={80} height={80} alt='kayblack' />
<strong>this is kayblack</strong>
<button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-30 '>
    <Play />
   </button>
   </a>
<a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 hover:bg-white/20 trasition-colors'>
  <img src= "/kay.jpg" width={80} height={80} alt='kayblack' />
   <strong>this is kayblack</strong>
   <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-30'>
    <Play />
   </button>
   </a>
<a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 hover:bg-white/20 trasition-colors'>
  <img src= "/kay.jpg" width={80} height={80} alt='kayblack' />
   <strong>this is kayblack</strong>
   <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-30'>
    <Play />
   </button>
   </a>
<a href='#' className='bg-white/5 group rounded-md flex items-center gap-4 hover:bg-white/20 trasition-colors'>
  <img src= "/kay.jpg" width={80} height={80} alt='kayblack' />
   <strong>this is kayblack</strong>
   <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-600 text-black ml-auto mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-30'>
    <Play />
   </button>
   </a>
      </div>

      <h1 className='font-semibold text-2xl mt-8'>Feitas para voce Guilherme </h1>
      <div className='grid grid-cols-5 gap-8 mt-4'>
<a className='bg-white/5 p-3 rounded  flex flex-col gap-2 hover:bg-white/10 '>
<img src= "/kay.jpg" className='w-full' width={80} height={80} alt='kayblack' />
<strong>This is kayblack</strong>
<span className='text-xs text-zinc-500'>o puro creme do trap</span>
</a>
<a className='bg-white/5 p-3 rounded flex flex-col gap-2  hover:bg-white/10'>
<img src= "/kay.jpg" className='w-full' width={80} height={80} alt='kayblack' />
<strong>This is kayblack</strong>
<span className='text-xs text-zinc-500'>o puro creme do trap</span>
</a>
<a className='bg-white/5 p-3 rounded flex flex-col gap-2  hover:bg-white/10'>
<img src= "/kay.jpg" className='w-full' width={80} height={80} alt='kayblack' />
<strong>This is kayblack</strong>
<span className='text-xs text-zinc-500'>o puro creme do trap</span>
</a>
<a className='bg-white/5 p-3 rounded flex flex-col gap-2  hover:bg-white/10'>
<img src= "/kay.jpg" className='w-full' width={80} height={80} alt='kayblack' />
<strong>This is kayblack</strong>
<span className='text-xs text-zinc-500'>o puro creme do trap</span>
</a>
<a className='bg-white/5 p-3 rounded flex flex-col gap-2  hover:bg-white/10'>
<img src= "/kay.jpg" className='w-full' width={80} height={80} alt='kayblack' />
<strong>This is kayblack</strong>
<span className='text-xs text-zinc-500'>o puro creme do trap</span>
</a>
<a className='bg-white/5 p-3 rounded flex flex-col gap-2  hover:bg-white/10'>
<img src= "/kay.jpg" className='w-full' width={80} height={80} alt='kayblack' />
<strong>This is kayblack</strong>
<span className='text-xs text-zinc-500'>o puro creme do trap</span>
</a>
      </div>
      </main>
  </div>
  <footer className='flex items-center justify-between bg-zinc-800 border-t border-zinc-700 py-2 px-6 fixed bottom-0 right-0 left-0'>
   <div className='flex items-center gap-2'>
   <img src= "/kay.jpg" width={50} height={50} alt='kayblack' />
   <div className='flex flex-col'>
    <strong className='font-normal '>Superficial</strong>
<span className='text-xs text-zinc-400'>Album - melhor só</span>
   </div>
   </div>
   <div className='flex flex-col items-center gap-2'>
    <div className='flex items-center gap-6'>
<Shuffle size={20} className='text-zinc-200'/>
<SkipBack size={20} className='text-zinc-200'/>
<button  className=' w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
<Play size={20} className='text-zinc-400'/>
</button>
<SkipForward size={20} className='text-zinc-200'/>
<Repeat size={20} className='text-zinc-200'/>
   </div>
   <div className='flex items-center gap-2'>
<span className='text-xs text-zinc-400'>00:32</span>
<div className='h1 rounded-full w-96 bg-zinc-600 overflow-hidden'>
  <div className='bg-zinc-200 w-40 h-1'></div>
</div>
<span className='text-xs text-zinc-400'>03:32</span>
   </div>
   </div>
   <div className='flex items-center gap-2'>
<Mic2 size={20}/>
<LayoutList size={20}/>
<Laptop2 size={20}/>
<div className='flex items-center gap-1' >
  <Volume size={20}/>
<div className='h1 rounded-full w-20 bg-zinc-600 overflow-hidden'>
  <div className='bg-green-400 w-8 h-1'></div>
  </div>
   </div>
   <Maximize2 size={20}/>
   </div>
    </footer>

</div>
  )
}
