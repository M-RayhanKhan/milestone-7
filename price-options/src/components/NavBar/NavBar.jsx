import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu  } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Services", path: "/services" }
      ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden">
              {
                open ? <AiOutlineMenu className="text-xl"></AiOutlineMenu> : <IoCloseSharp className="text-xl"></IoCloseSharp>
              }
                
            </div>
            <ul className={`${open ? 'top-8' : '-top-60'}
                md:flex absolute md:static gap-10 duration-1000 font-bold bg-gray-300 px-4 py-4`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default NavBar;