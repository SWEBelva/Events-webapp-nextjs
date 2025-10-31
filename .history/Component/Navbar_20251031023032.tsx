import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
   <header>
    <nav>
   <Link href='/' className="logo">
   <Image src="/icons/logo.png" alt="Dev Events Logo" width={24} height={24}/>
   <p>DevEvents</p>
   </Link>
   <ul>
    <Link href="/">Home</Link>
    <Link href="/">Events</Link>
    <Link href="/">create Events</Link>
   </ul>
    </nav>
   </header>
  )
}

export default Navbar