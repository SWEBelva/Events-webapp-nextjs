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
    <div className="flex flex-row gap-2">
      
      <p className="title opacity-30">{location}</p>
    </div>
    <p className="title">{title}</p>
    <div className="flex space-x-2.5 opacity-30">
      <p className="title">{date}</p>
    <p className="title">{time}</p>
    </div>

    </Link>
  )
}

export default Eventcards