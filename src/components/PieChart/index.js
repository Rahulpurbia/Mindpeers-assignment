import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

// const data = [
//   { name: "Group A", value:50 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];

const data = Array.from({ length: 17 }, (_, index) => {
  if (index === 7) {
    return {
      name: `3 Hours`,
      value: 3, // Each segment has a value of 1
    };
  } else if (index === 13) {
    return {
      name: `6 Hours`,
      value: 6, // Each segment has a value of 1
    };
  } else {
    return {
      name: `1 Hour`,
      value: 1,
    };
  }
});

const activeName = [`3 Hours`, "6 Hours"];

const colorArr = ["#b5a1e5ff", "#454545ff"];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function ChartHere() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={400} height={400}>
      <Pie
        // activeIndex={activeIndex}
        activeShape={renderActiveShape}
        animationDuration={100}
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        onMouseEnter={onPieEnter}
        startAngle={90}
        endAngle={-270}
        // labelLine={true}
        stroke="none"
        strokeOpacity={0} // Set stroke to 'none'
        strokeWidth={0} // Set strokeWidth to 0
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={
              activeName.includes(data[index].name) ? colorArr[0] : colorArr[1]
            }
            style={{ outline: "none" }}
          />
        ))}
      </Pie>
    </PieChart>
  );
}
