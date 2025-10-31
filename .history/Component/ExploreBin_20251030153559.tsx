'use client'
import Image from "next/image"

const ExploreBin = () => {
  return (
    <button  type='button' id='explore-btn'className="mt-7 mx-auto"  onClick={()=>console.log('CLICK')}>
        <a href="#events">
             Explorer Events
             <Image src="/icons/arrow-down.svg" alt="arrow down" width={20} height={2-}/>
        </a>
    </button>
  )
}

export default ExploreBin