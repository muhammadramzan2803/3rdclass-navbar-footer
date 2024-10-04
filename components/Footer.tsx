import Link from "next/link"

export default function Footer(){
    return(
        <ul className="flex gap-10 bg-blue-700 h-12 justify-center text-white p-4">
       
        <li><Link href="https://www.linkedin.com/feed/">Linkdin</Link></li>
        
       </ul>
    )
}