import Image from "next/image"
import Link from "next/link"

type LogoLinkColor = "black" | "white"

interface LogoLink {
    href: string
    color: LogoLinkColor
}

function Logo({href, color = "white"} : LogoLink) {
    return (
        <Link 
            href={href}
            className="flex gap-2 items-center font-roboto font-medium text-3xl max-md:text-2xl"
        >
            <span className={color == "white" ? "text-white" : "text-black"}>Uz</span>
            <Image
                src={"/logo.png"}
                alt="logo"
                width={40}
                height={40}
                className="object-contain"
            />
            <span className={color == "white" ? "text-white" : "text-black"}>Academy</span>
        </Link>
    )
}

export default Logo