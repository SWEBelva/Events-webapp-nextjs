import ExploreBin from "@/Component/ExploreBin"
const events=[
  {image:'/images/event1.jpg',title:'Event 1'},
  {image:'/images/event2.jpg',title:'Event 2'},
  {image:'/images/event3.jpg',title:'Event 3'},
  {image:'/images/event4.jpg',title:'Event 4'},
  {image:'/images/event5.jpg',title:'Event 5'},
  {image:'/images/event6.jpg',title:'Event 6'},
]
import Eventcards from "@/Component/Eventcards"
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
      <ul className="events">
        {events.map((event)=>(
          <li key={event.title} >
            E
          </li>
        ))}
      </ul>

    </div>
    </section>
  )
}

export default Home