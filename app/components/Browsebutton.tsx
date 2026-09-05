"use client"

import Link from "next/link"

export default function Browsebutton () {
    return(
        <Link href="/accomodation"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg">Browse Accommodation</Link>

    )
}