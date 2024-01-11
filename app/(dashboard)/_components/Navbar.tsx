import React from 'react';
import {MobileSidebar, NavbarRoutes} from "@app/(dashboard)/_components/index";

const Navbar = () => {
    return (
        <div className="p-4 h-full flex items-center justify-between shadow-sm dark:bg-background bg-white">
            <MobileSidebar/>
            <NavbarRoutes/>
        </div>
    );
};

export default Navbar;