import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {useTheme} from "next-themes";

const data = [
    {
        month: 'Dec',
        users: 4000,
        agents: 2400,
    },
    {
        month: 'Jan',
        users: 3000,
        agents: 1398,
    },
    {
        month: 'Feb',
        users: 2000,
        agents: 9800,
    },
    {
        month: 'Mar',
        users: 2780,
        agents: 3908,
    },
    {
        month: 'Apr',
        users: 1890,
        agents: 4800,
        amt: 2181,
    },
    {
        month: 'May',
        users: 2390,
        agents: 3800,
    },
    {
        month: 'Jun',
        users: 3490,
        agents: 4300,
    },
];

const AltLineChart = () => {

    const {resolvedTheme} = useTheme()

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                <XAxis
                    dataKey="month"
                    tickMargin={20}
                    tick={{
                        fontSize: '13px',
                        fill: `${resolvedTheme === "dark" ? '#fff' : '#000'}`,
                        fontFamily: "Roboto"
                    }}
                />
                <YAxis
                    tick={{
                        fontSize: '13px',
                        fill: `${resolvedTheme === "dark" ? '#fff' : '#000'}`,
                        fontFamily: "Roboto",
                    }}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip/>
                <Legend
                    wrapperStyle={{
                        paddingTop: "1rem",
                    }}
                />
                <Line type="monotone" dataKey="agents" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="users" stroke="#82ca9d"/>
            </LineChart>
        </ResponsiveContainer>
    );

}

export default AltLineChart;
