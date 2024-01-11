"use client"
import React from 'react';
import {Logo} from "@app/(dashboard)/_components";
import {HomeDoor, UsersTriple, SettingShort, FolderOpenMinus, Report, FileAccept, MailArrowDown} from "react-huge-icons/bulk";
import SidebarItem from "@app/(dashboard)/_components/SidebarItem";


const sidebarRoutes = [
    {
        icon: HomeDoor,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: MailArrowDown,
        label: "Requests",
        href: "/requests",
    },
    {
        icon: FileAccept,
        label: "KYC",
        href: "/kyc",
    },
    {
        icon: Report,
        label: "Reports",
        href: "/reports",
    },
    {
        icon: FolderOpenMinus,
        label: "Audit Trail",
        href: "/audit-trail",
    },
    {
        icon: UsersTriple,
        label: "Users",
        href: "/users"
    },
    {
        icon: SettingShort,
        label: "Settings",
        href: "/settings"
    },
]

const Sidebar = () => {

    return (
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm bg-[#990d81] w-full">
            <div className="p-6 flex justify-center items-center">
                {/*@ts-ignore*/}
                <Logo className="dark:text-primary-foreground text-white font-bold"/>
            </div>
            <div className="flex flex-col mx-3 gap-2">
                {
                    sidebarRoutes.map((route, index) => (
                        <SidebarItem icon={route.icon} label={route.label} href={route.href} key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;