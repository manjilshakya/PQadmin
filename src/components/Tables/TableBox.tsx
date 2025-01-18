import React from "react";
import Box from "./Box";
import { Line } from "@ant-design/charts";

const TableBox = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];
  const config = {
    data,
    xField: "year",
    yField: "value",
    point: {
      shapeField: "square",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };
  return (
    <div className="shadow-defalut w-[262px] bg-white p-8 dark:border-strokedark dark:bg-boxdark md:w-[462px]">
      <div>
        <h1 className="text-xl font-semibold text-black dark:text-white">
          Tickets
        </h1>
        {/* <div className="mt-4 grid gap-3 md:grid-cols-2"> */}
        <div className="h-full w-full">
          <Line {...config} />
          {/* <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box /> */}
        </div>
      </div>
    </div>
  );
};

export default TableBox;
