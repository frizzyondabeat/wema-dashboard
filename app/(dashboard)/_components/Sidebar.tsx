"use client"
import React from 'react';
import {Logo} from "@app/(dashboard)/_components";
import {HomeDoor, UsersTriple, SettingShort, FolderOpenMinus, Report, FileAccept, MailArrowDown} from "react-huge-icons/bulk";
import SidebarItem from "@app/(dashboard)/_components/SidebarItem";
import {Avatar, AvatarFallback} from "@components/ui/avatar";


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
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm bg-[#990d81] w-full justify-between">
            <div className=" flex justify-center items-center">
                {/*@ts-ignore*/}
                <Logo className="dark:text-primary-foreground text-white font-bold"/>
            </div>
            {/*Division Line*/}
            <div className="flex justify-center items-center mx-3 h-[1px] my-2 bg-white/30"/>
            <div className="flex flex-col mx-3 gap-2">
                {
                    sidebarRoutes.map((route, index) => (
                        <SidebarItem icon={route.icon} label={route.label} href={route.href} key={index}/>
                    ))
                }
            </div>
            {/*Division Line*/}
            <div className="flex justify-center items-center mx-3 h-[1px] my-2 bg-white/30"/>
            <div className="flex justify-end mx-3 rounded-lg bg-white/20 gap-3 p-3 mb-2 items-center">
                <Avatar>
                    <AvatarFallback className="text-wema-purple bg-white/60">
                        EO
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full text-white">
                    <p className="text-sm font-bold">Efeoghene Omonigho</p>
                    <p className="text-xs text-white/75">Frontend Engineer</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;