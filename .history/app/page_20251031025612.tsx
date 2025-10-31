import ExploreBin from "@/Component/ExploreBin"
import Eventcards from "@/Component/Eventcards"
const events = [
  {image:'/images/event1.png',title:'React Conference 2024',
    slug:'event-1',
    location:'location-1',
    date:'date-1',
    
  },
  {image:'/images/event2.png',title:'JavaScript Summit 2024'},

]
const Home = () => {
  return (
    <section>
    <div>
      <h1 className="text-center">The hub of Every Dev <br/>  Event You Can’t Miss</h1>
      <p className="text-center mt-5">Hackatons,Meetups and Conference all in one place</p>
      <ExploreBin/>
    </div>
    <div className="mt-20 space-y-7">
      <h3>Featured Events </h3>
      <ul className="events list-none">
        {events.map((event)=>(
          <li key={event.title} >
          <Eventcards {...event}/>
          </li>
        ))}
      </ul>

    </div>
    </section>
  )
}

export default Home