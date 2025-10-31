import ExploreBin from "@/Component/ExploreBin"
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
        {[1,2,3,4,5].map((event)=>(
          <li key={event} className="event-card">Even</li>
        ))}
      </ul>

    </div>
    </section>
  )
}

export default Home