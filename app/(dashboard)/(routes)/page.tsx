"use client"

import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@components/ui/card";
import {IoIosTimer} from "react-icons/io";
import {FaArrowTrendDown, FaArrowTrendUp} from "react-icons/fa6";
import {IoCheckmarkDone, IoStorefrontOutline} from "react-icons/io5";
import {UsersTriple} from "react-huge-icons/bulk"
import {UsersTable} from "@app/(dashboard)/_components/usersTable";
import AltLineChart from "@app/(dashboard)/_components/AltLineChart";
import AltBarChart from "@app/(dashboard)/_components/AltBarChart";

const Page = () => {
    return (
        <div className="p-4 dark:bg-background bg-slate-50 w-full min-h-full gap-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                <Card className="w-full h-full p-4 items-center flex justify-center">
                    <div className="w-full h-full flex gap-2">
                        <p className="rounded-full w-10 h-10 p-2 bg-indigo-50 flex items-start justify-start">
                            <IoIosTimer className="text-2xl font-bold text-indigo-700"/>
                        </p>
                        <div
                            className="flex flex-col w-full">
                            <p className="font-bold">1478,286</p>
                            <p className="text-xs text-muted-foreground">Pending Requests</p>
                            <div className="flex items-center text-[11px] gap-2 mt-3">
                                <p className="flex gap-1 items-center text-green-500">
                                    <FaArrowTrendUp className="text-xs text-green-500"/>
                                    4.07%
                                </p>
                                <p className="whitespace-nowrap text-muted-foreground ">Last month</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="w-full h-full p-4 items-center flex justify-center">
                    {/*<CardContent>*/}
                    {/*    */}
                    {/*</CardContent>*/}
                    <div className="w-full h-full flex gap-2">
                        <p className="rounded-full w-10 h-10 p-2 bg-yellow-100 flex items-start justify-start">
                            <IoCheckmarkDone className="text-2xl font-bold text-yellow-600"/>
                        </p>
                        <div
                            className="flex flex-col w-full">
                            <p className="font-bold">1478,286</p>
                            <p className="text-xs text-muted-foreground">Approved Requests</p>
                            <div className="flex items-center text-[11px] gap-2 mt-3">
                                <p className="flex gap-1 items-center text-green-500">
                                    <FaArrowTrendUp className="text-xs text-green-500"/>
                                    0.24%
                                </p>
                                <p className="whitespace-nowrap text-muted-foreground">Last month</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="w-full h-full p-4 items-center flex justify-center">
                    {/*<CardContent>*/}
                    {/*    */}
                    {/*</CardContent>*/}
                    <div className="w-full h-full flex gap-2">
                        <p className="rounded-full w-10 h-10 p-2 bg-purple-100 flex items-start justify-start">
                            <IoStorefrontOutline className="text-2xl font-bold text-purple-500"/>
                        </p>
                        <div
                            className="flex flex-col w-full">
                            <p className="font-bold">154,872</p>
                            <p className="text-xs text-muted-foreground">Total Agents</p>
                            <div className="flex items-center text-[11px] gap-2 mt-3">
                                <p className="flex gap-1 items-center text-red-500">
                                    <FaArrowTrendDown className="text-xs text-red-500"/>
                                    4.07%
                                </p>
                                <p className="whitespace-nowrap text-muted-foreground">Last month</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="w-full h-full p-4 items-center flex justify-center">
                    {/*<CardContent>*/}
                    {/*    */}
                    {/*</CardContent>*/}
                    <div className="w-full h-full flex gap-2">
                        <p className="rounded-full w-10 h-10 p-2 bg-green-50 flex items-start justify-start">
                            <UsersTriple className="text-2xl font-bold text-green-500"/>
                        </p>
                        <div
                            className="flex flex-col w-full">
                            <p className="font-bold">167</p>
                            <p className="text-xs text-muted-foreground">Total Users</p>
                            <div className="flex items-center text-[11px] gap-2 mt-3">
                                <p className="flex gap-1 items-center text-yellow-500">
                                    <FaArrowTrendUp className="text-xs text-yellow-500"/>
                                    0.00%
                                </p>
                                <p className="whitespace-nowrap text-muted-foreground">Last month</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            {/*Graph Section*/}
            <div className="mb-4 gap-4 grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1">
                <Card className="lg:col-span-2 col-span-1">
                    <CardHeader>
                        <CardTitle>
                            <div className="w-full flex justify-between">
                                <p className="font-bold text-lg w-3/4 whitespace-nowrap">User Inflow Statistics</p>
                                <div className="flex justify-end gap-4">
                                    <div className="flex gap-2 items-start">
                                        <p className="w-2 h-2 rounded-full bg-indigo-500" />
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground uppercase">Agents</p>
                                            <p className="text-sm">478,286</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <p className="w-2 h-2 rounded-full bg-green-500" />
                                        <div className="flex flex-col">
                                            <p className="text-xs text-muted-foreground uppercase">Users</p>
                                            <p className="text-sm">782,396</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="w-full h-[80%]">
                        <AltLineChart />
                    </CardContent>
                </Card>

                <Card className="col-span-1 bg-[#990d81] text-white items-center flex flex-col w-full h-full justify-between">
                    <CardHeader />
                    <div className="flex h-full w-full">
                        <AltBarChart />
                    </div>
                    <CardFooter className="flex flex-col m-0 items-start w-full">
                        <p className="font-bold text-lg">New Users</p>
                        <p className="text-sm">(+23%) than last week</p>
                    </CardFooter>
                </Card>
            </div>
            {/*Tables*/}
            <Card className="">
                <UsersTable />
            </Card>
            {/*<Header />*/}
        </div>
    );
};

export default Page;