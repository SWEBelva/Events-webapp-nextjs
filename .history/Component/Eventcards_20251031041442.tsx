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
    <Link href='{/events}' className="event-card">
    <Image src={image} alt={title} width={410} height={200} className="poster"/>
     <p className="title opacity-20">{location}</p>
    <p className="title">{title}</p>
    <div className="flex spa">
      <p className="title">{date}</p>
    <p className="title">{time}</p>
    </div>

    </Link>
  )
}

export default Eventcards