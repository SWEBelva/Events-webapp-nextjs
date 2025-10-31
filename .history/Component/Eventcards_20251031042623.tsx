import Link from "next/link"
import Image from "next/image"
interface Props{
    title:string;
    image:string;
    slug:string;
    location:string;
    date:string;
    time:string;
}
const Eventcards = ({title,image,slug,location,date,time}:Props) => {
  return (
    <Link href='{/events/${slug}}'  className="event-card">
    <Image src={image} alt={title} width={410} height={200} className="poster"/>
    <div className="flex flex-row gap-2 mt-3">
      <Image src="/icons/pin.svg" alt="location icon" width={16} height={16}/>
      <p className="title opacity-30">{location}</p>
    </div>
    <p className="title">{title}</p>
    <div className="datetime flex flex-row gap-5 ">
      <div  className="flex flex-row">
      <Image src="/icons/calendar.svg" alt="calendar icon" width={16} height={16}/>
       <p className="title">{date}</p>
      </div>
       <div>
      <Image src="/icons/clock.svg" alt="calendar icon" width={16} height={16}/>
       <p className="title">{time}</p>
      </div>
    </div>

    </Link>
  )
}

export default Eventcards