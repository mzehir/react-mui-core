import React from "react";

import TableHeadComp from "./MuiTableComp/TableHeadComp";
import TableBodyComp from "./MuiTableComp/TableBodyComp";

import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";

export default function MuiTable({ cells, rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHeadComp cells={cells} />
        <TableBodyComp cells={cells} rows={rows} />
      </Table>
    </TableContainer>
  );
}
