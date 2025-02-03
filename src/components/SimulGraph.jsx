import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SimulGraph = ({simulData}) => {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <LineChart data={simulData}>
                    <XAxis dataKey="date" tick={{ fill: '#666' }} axisLine={{ stroke: '#999' }} />
                    <YAxis
                        tickFormatter={(value) => `$${value.toLocaleString()}`}
                        tick={{ fill: '#666' }}
                        axisLine={{ stroke: '#999' }}
                    />
                    <Tooltip
                        cursor={{ fill: '#f0f0f0' }}
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #ddd',
                            borderRadius: '4px'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="cumulative_return"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimulGraph;
