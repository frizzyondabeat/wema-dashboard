import React from 'react';
import {Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {useTheme} from "next-themes";

const data = [
    {
        month: 'Jan',
        users: 3000,
    },
    {
        month: 'Feb',
        users: 2000,
    },
    {
        month: 'Mar',
        users: 2780,
    },
    {
        month: 'Apr',
        users: 1890,
        amt: 2181,
    },
    {
        month: 'May',
        users: 2390,
    },
];

const AltBarChart = () => {

    const {resolvedTheme} = useTheme()
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={10}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis
                    dataKey="month"
                    tick={{
                        fontSize: '13px',
                        fill: '#fff',
                        fontFamily: "Roboto"
                    }}
                />
                <YAxis
                    tick={{
                        fontSize: '13px',
                        fill: '#fff',
                        fontFamily: "Roboto",
                    }}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip
                    itemStyle={{
                        fontSize: '13px',
                        fill: `${resolvedTheme === "dark" ? '#fff' : '#000'}`,
                        fontFamily: "Roboto",
                        color: `orange`,
                    }}
                    contentStyle={{
                        backgroundColor: `${resolvedTheme === "dark" ? '#1e1e1e' : '#fff'}`,
                        border: "none",
                        borderRadius: "5px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        color: `${resolvedTheme === "dark" ? '#fff' : '#000'}`,
                    }}
                    labelStyle={{
                        fontWeight: "bold",
                    }}
                />
                <Bar dataKey="users" fill="#fff" activeBar={<Rectangle fill="orange" stroke="blue"/>} radius={
                    [10, 10, 0, 0]
                }/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default AltBarChart;