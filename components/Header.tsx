import Link from "next/link"

export default function Header(){
    return(
        <ul className="flex gap-10 bg-orange-700 h-12 p-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact-us">Countact</Link></li>
       </ul>
    )
}