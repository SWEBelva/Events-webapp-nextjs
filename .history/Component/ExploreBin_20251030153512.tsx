'use client'
import Image from "next/image"

const ExploreBin = () => {
  return (
    <button  type='button' id='explore-btn'className="mt-7 mx-auto"  onClick={()=>console.log('CLICK')}>
        <a href="#events">
             Explorer Events
             <Image src="/icon/arrow-down.svg" alt="arrow down" width={24} h/>
        </a>
    </button>
  )
}

export default ExploreBin