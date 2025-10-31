import Link from "next/link"
import Image from "next/image"
interface Props{
    title:string;
    image:string;
}
const Eventcards = ({title,image}:Props) => {
  return (
    Link href='/' className="event-card">
    <Image src={image} alt={title} width={0} height={200} className="poster"/>
    <h4>{title}</h4>
    </Link>
  )
}

export default Eventcards