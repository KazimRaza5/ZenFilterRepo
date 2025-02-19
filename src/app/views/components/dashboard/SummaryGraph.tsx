'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const SummaryGraph = () => {
    const data = [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 600 },
        { name: "Mar", value: 200 },
    ];

    return (
        <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
    );
};

export default SummaryGraph;
