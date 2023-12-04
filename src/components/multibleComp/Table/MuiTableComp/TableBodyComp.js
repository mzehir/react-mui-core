import React from "react";
import Row from "./BodyComponents/Row";
import TableBody from "@mui/material/TableBody";

const TableBodyComp = ({ rows, cells }) => {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <Row key={index} row={row} cells={cells} />
      ))}
    </TableBody>
  );
};

export default TableBodyComp;
