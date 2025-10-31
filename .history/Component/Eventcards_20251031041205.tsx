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

const Eventcards = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} className="event-card" style={{ textDecoration: "none" }}>
      <Image src={image} alt={title} width={410} height={200} className="poster" />
      <p className="title">{title}</p>
      <div className="datetime">
        <div>
          <span role="img" aria-label="location">📍</span> {location}
        </div>
        <div>
          <span role="img" aria-label="date">📅</span> {date}
        </div>
        <div>
          <span role="img" aria-label="time">⏰</span> {time}
        </div>
      </div>
    </Link>
  );
}

export default Eventcards