import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link"
import {Button} from "@components/ui/button";
import {Input} from "@components/ui/input";
import {Search} from "@node_modules/lucide-react";
import {ModeToggle} from "@components/ui/toggle-mode";
import {UserNav} from "@components/ui/user-nav";
import {Notification} from "react-huge-icons/bulk";
import { IoIosArrowDown } from "react-icons/io";


const NavbarRoutes = () => {

    const pathname = usePathname();

    const navHeader = pathname.split("/")[1] ? pathname.split("/")[1] : "dashboard"

    return (
        <div className="flex gap-x-5 justify-between items-center w-full">
            <Link href={pathname.split("/")[1] ? `/${pathname.split("/")[1]}` : "/"} className={"w-1/2"}>
                <p className="capitalize font-bold text-xl">
                    {navHeader}
                </p>
            </Link>


            <div className="flex gap-x-5 w-full justify-end">
                {/*<SelectLanguagePrompt />*/}
                <div className="md:flex relative w-1/2 h-full items-center justify-center hidden">
                    <Input placeholder="Enter keywords" className="px-10 border-0 bg-slate-50 dark:bg-slate-50/5" />
                    <Search size={18} className="text-slate-500 absolute left-3" />
                </div>
                <Button variant="ghost" className="flex relative">
                    EN
                    <IoIosArrowDown className="h-[1.2rem] w-[1.2rem]"/>
                </Button>
                <ModeToggle />
                <Button variant="secondary" size="icon" className="rounded-full flex relative bg-slate-50 dark:bg-slate-50/5">
                    <Notification className="h-[1.2rem] w-[1.2rem]"/>
                    <div className="absolute top-2 right-3 w-2 h-2 rounded-full bg-red-500 border border-white"/>
                </Button>
                <UserNav />
            </div>
        </div>
    );
};

export default NavbarRoutes;