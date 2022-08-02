import Link from "next/link";
import { useContext } from "react";

import { UserContext } from "@lib/context";

//component children only shown to logged in usr 

export default function AuthCheck(props) {
    const {username} = useContext(UserContext)
    return username ? props.children : props.fallback || <Link href="/enter">You must login first</Link>
}