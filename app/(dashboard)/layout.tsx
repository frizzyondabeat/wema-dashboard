"use client"
import React from 'react';
import {Navbar, Sidebar} from "@app/(dashboard)/_components";


const DashboardLayout = ({children}: { children: React.ReactNode }) => {


    return (
        <div className="h-full">
            <nav className="h-20 md:pl-[20%] fixed inset-y-0 inset-x-0 w-full z-20">
                <Navbar/>
            </nav>
            <aside className="hidden md:flex h-full w-1/5 flex-col z-20 fixed inset-y-0">
                <Sidebar/>
            </aside>
            <main className="md:pl-[20%] pt-20 h-full">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;