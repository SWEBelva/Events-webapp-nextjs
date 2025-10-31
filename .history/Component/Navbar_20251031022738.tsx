import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
   <header>
    <nav>
   <Link href='/' className="logo"/>
   <Image></Image>
    </nav>
   </header>
  )
}

export default Navbar