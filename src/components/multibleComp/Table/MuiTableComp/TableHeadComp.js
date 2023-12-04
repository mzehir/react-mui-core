import React from "react";

import TableCellComp from "./TableCellComp";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableHeadComp = ({ cells }) => {
  return (
    <TableHead>
      <TableRow>
        {cells.map((cell, index) => {
          if (cell.key === "spacer") {
            return <TableCellComp key={index} />;
          } else {
            return (
              <TableCellComp key={index} cell={cell}>
                {cell.text}
              </TableCellComp>
            );
          }
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComp;
