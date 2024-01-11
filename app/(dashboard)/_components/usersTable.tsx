import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IoIosArrowBack } from "react-icons/io";
import {Button} from "@components/ui/button";
import {Avatar, AvatarFallback} from "@components/ui/avatar";

type User = {
    name: {
        name: string
        email: string
    },
    type: string,
    status: "Pending" | "Active",
    date: string
}


const users: User[] = [
    {
        name: { name: "Michael Olu", email: "michael@mail.com"},
        type: "New Agent",
        status: "Pending",
        date: "2021/01/20",
    },
    {
        name: { name: "Michael Olu", email: "michael@mail.com"},
        type: "New Agent",
        status: "Pending",
        date: "2021/01/20",
    },
    {
        name: { name: "Michael Olu", email: "michael@mail.com"},
        type: "New Agent",
        status: "Active",
        date: "2021/01/20",
    },
    {
        name: { name: "Michael Olu", email: "michael@mail.com"},
        type: "New Agent",
        status: "Active",
        date: "2021/01/20",
    },
]


const statusColors = {
    pending: {
        background: "bg-yellow-50",
        color: "text-yellow-500"
    },
    active: {
        background: "bg-green-50",
        color: "text-green-500"
    }
} as Record<string, { background: string; color: string }>;

export function UsersTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">
                        <p className="font-bold">Name/Email</p>
                    </TableHead>
                    <TableHead>
                        <p className="font-bold">Type</p>
                    </TableHead>
                    <TableHead>
                        <p className="font-bold">Status</p>
                    </TableHead>
                    <TableHead>
                        <p className="font-bold">Date</p>
                    </TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.name.name}>
                        <TableCell className="font-medium flex gap-2 items-center">
                            <Avatar>
                                <AvatarFallback>
                                    {user.name.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="text-sm leading-none">{user.name.name}</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {user.name.email}
                                </p>
                            </div>
                        </TableCell>
                        <TableCell>{user.type}</TableCell>
                        <TableCell>
                            <p className={`${statusColors[user.status.toLowerCase()].background} ${statusColors[user.status.toLowerCase()].color} text-sm w-3/5 flex items-center justify-center p-2 rounded-lg`}>
                                {user.status}
                            </p>
                        </TableCell>
                        <TableCell>{user.date}</TableCell>
                        <TableCell>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <IoIosArrowBack />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
