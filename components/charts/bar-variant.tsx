import React from "react";
import { format } from "date-fns";
import {
  Tooltip,
  XAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import { CustomTooltip } from "../tooltip/custom-tooltip";

type Props = {
  data: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const BarVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          dataKey="date"
          tickLine={false}
          tickFormatter={(value) => format(new Date(value), "dd MMM")}
          style={{ fontSize: "12px" }}
          tickMargin={10}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="income"
          stackId="income"
          fill="#10B981"
          className="drop-shadow-sm"
        />
        <Bar
          dataKey="expenses"
          stackId="expenses"
          fill="#EF4444"
          className="drop-shadow-sm"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
