'use client'

const ExploreBin = () => {
  return (
    <button  type='button' id='explore-btn'className="mt-7 mx-auto"  onClick={()=>console.log('CLICK')}>
        <a href="#events">
             Explorer Events
             <img src="/icon/arrow-" alt="" />
        </a>
    </button>
  )
}

export default ExploreBin