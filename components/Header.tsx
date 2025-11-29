import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="flex justify-between p-6 items-center">
            <nav className="flex gap-6 text-gray-700">
                <Link href="/">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
                {/* <Link href="/login" className="text-purple-600">Login</Link> */}
                <Link
                    href="/item/add"
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg"
                >
                    Report Item
                </Link>
            </div>
        </header>
    )
}

export default Header
