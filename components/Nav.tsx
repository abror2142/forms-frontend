import { Flowbite } from "flowbite-react";
import { Navbar, DarkThemeToggle } from "flowbite-react";

const Nav = () => {
    return (
        <nav className="flex justify-between items-center px-4 py-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
            <div className="px-6 py-2 bg-gray-200 text-gray-600 rounded-md dark:bg-gray-900">LOGO</div>
            <div>Menu</div>
            <div className="flex gap-4 items-center">
                <DarkThemeToggle />
                <div>Sign In</div>
            </div>
        </nav>  
    )
}

export default Nav