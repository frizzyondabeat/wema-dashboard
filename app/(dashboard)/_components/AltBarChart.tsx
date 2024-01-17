import React from 'react';
import {Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

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
                <Tooltip/>
                <Bar dataKey="users" fill="#fff" activeBar={<Rectangle fill="orange" stroke="blue"/>} radius={
                    [10, 10, 0, 0]
                }/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default AltBarChart;