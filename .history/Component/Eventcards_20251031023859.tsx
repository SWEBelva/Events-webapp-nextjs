import Link from "next/link"
import Image from "next/image"
interface Props{
    title:string;
    image:string;
}
const Eventcards = ({title,image}:Props) => {
  return (
    Link href='/' className="event-card">
    <Image src={image} alt={title} width={410} height={200} className="poster"/>
    <p className=""></p>
    </Link>
  )
}

export default Eventcards