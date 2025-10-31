import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
   <header>
    <nav>
   <Link href='/' className="logo"/>
   <Image src="/logo.png" alt="Dev Events Logo" width={120} height={40}/>
    </nav>
   </header>
  )
}

export default Navbar