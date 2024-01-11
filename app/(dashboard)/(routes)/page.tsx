"use client"

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@components/ui/card";
import {IoIosTimer} from "react-icons/io";
import {FaArrowTrendDown, FaArrowTrendUp} from "react-icons/fa6";
import {IoCheckmarkDone, IoStorefrontOutline} from "react-icons/io5";
import {UsersTriple} from "react-huge-icons/bulk"
import {UsersTable} from "@app/(dashboard)/_components/usersTable";
import DummyLineChart from "@app/(dashboard)/_components/DummyLineChart";
import {data, barData} from "@app/(dashboard)/_components/dummyData";
import DummyBarChart from "@app/(dashboard)/_components/DummyBarChart";

const Page = () => {
    return (
        <div className="p-4 dark:bg-background bg-slate-50 min-h-full gap-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                <Card className="w-full h-full p-4 items-center flex justify-center">
                    {/*<CardContent>*/}
                    {/*    */}
                    {/*</CardContent>*/}
                    <div className="w-full h-full flex gap-2">
                        <p className="rounded-full w-10 h-10 p-2 bg-indigo-50 flex items-start justify-start">
                            <IoIosTimer className="text-2xl font-bold text-indigo-700"/>
                        </p>
                        <div
                            className="flex flex-col w-full">
                            <p className="font-bold">1478,286</p>
                            <p className="text-xs text-muted-foreground">Pending Requests</p>
                            <div className="flex items-center text-xs gap-2 mt-3">
                                <p className="flex gap-1 items-center text-green-500">
                                    <FaArrowTrendUp className="text-xs text-green-500"/>
                                    4.07%
                                </p>
                                <p className="whitespace-nowrap">Last month</p>
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
                            <div className="flex items-center text-xs gap-2 mt-3">
                                <p className="flex gap-1 items-center text-green-500">
                                    <FaArrowTrendUp className="text-xs text-green-500"/>
                                    0.24%
                                </p>
                                <p className="whitespace-nowrap">Last month</p>
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
                            <div className="flex items-center text-xs gap-2 mt-3">
                                <p className="flex gap-1 items-center text-red-500">
                                    <FaArrowTrendDown className="text-xs text-red-500"/>
                                    4.07%
                                </p>
                                <p className="whitespace-nowrap">Last month</p>
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
                            <div className="flex items-center text-xs gap-2 mt-3">
                                <p className="flex gap-1 items-center text-yellow-500">
                                    <FaArrowTrendUp className="text-xs text-yellow-500"/>
                                    0.00%
                                </p>
                                <p className="whitespace-nowrap">Last month</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="mb-4 grid gap-4 md:grid-cols-1 lg:grid-cols-3 grid-cols-1">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>
                            <div className="w-full flex justify-between">
                                <p className="font-bold text-lg w-3/4">User Inflow Statistics</p>
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
                        <DummyLineChart data={data} />
                    </CardContent>
                </Card>

                <Card className="bg-[#990d81] text-white w-full h-full p-4 items-center flex justify-center">
                    <DummyBarChart data={barData} />
                </Card>
            </div>
            <Card className="">
                <UsersTable />
            </Card>
        </div>
    );
};

export default Page;