"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { DomainUsages } from "./DomainUsageService";

type Props = DomainUsages;

/**
 * Graph for the domain usage.
 * 
 * @link https://github.com/shadcn-ui/ui/blob/main/apps/www/app/(app)/examples/dashboard/components/overview.tsx
 * @link https://ui.shadcn.com/examples/dashboard
 * @link https://recharts.org/en-US/guide/getting-started
 */
export default function DomainUsageGraph({ data }: { data: Props }) {
    // Adjust Y-Axis for only integers
    const maxTotal = Math.max(...data.map(item => item.quantity));
    const ticks = Array.from({ length: maxTotal + 1 }, (_, i) => i);

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis
                    dataKey="domain"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    ticks={ticks}
                    tickFormatter={(tick) => Number.isInteger(tick) ? tick : ''}
                />
                <Bar
                    dataKey="quantity"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                />
            </BarChart>
        </ResponsiveContainer>
    );
}