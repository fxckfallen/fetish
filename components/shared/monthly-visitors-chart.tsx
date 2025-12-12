"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "1", visitors: 120 },
  { day: "2", visitors: 150 },
  { day: "3", visitors: 90 },
  { day: "4", visitors: 200 },
  { day: "5", visitors: 170 },
  { day: "6", visitors: 250 },
  { day: "7", visitors: 300 },
  { day: "8", visitors: 220 },
  { day: "9", visitors: 180 },
  { day: "10", visitors: 210 },
  { day: "11", visitors: 195 },
  { day: "12", visitors: 230 },
  { day: "13", visitors: 260 },
  { day: "14", visitors: 280 },
  { day: "15", visitors: 310 },
  { day: "16", visitors: 290 },
  { day: "17", visitors: 270 },
  { day: "18", visitors: 320 },
  { day: "19", visitors: 350 },
  { day: "20", visitors: 330 },
  { day: "21", visitors: 300 },
  { day: "22", visitors: 310 },
  { day: "23", visitors: 295 },
  { day: "24", visitors: 280 },
  { day: "25", visitors: 260 },
  { day: "26", visitors: 240 },
  { day: "27", visitors: 250 },
  { day: "28", visitors: 270 },
  { day: "29", visitors: 290 },
  { day: "30", visitors: 310 },
];

export function MonthlyVisitorsChart() {
  return (
    <Card className="w-full mt-[100px]">
      <CardHeader>
        <CardTitle>Website Visitors (Last 30 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                }}
              />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#00d0ff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
