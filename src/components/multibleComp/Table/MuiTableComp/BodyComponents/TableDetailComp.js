import React from "react";

import TableHeadComp from "../TableHeadComp";
import TableBodyComp from "../TableBodyComp";
import TableCellComp from "../TableCellComp";
import TypographyComp from "../../../../Typography";
import BoxComp from "../../../../Box";

import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";

const TableDetailComp = ({ open, title, rows, cells }) => {
  return (
    <TableRow>
      <TableCellComp style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <BoxComp sx={{ margin: 1 }}>
            <TypographyComp variant="h6" gutterBottom component="div">
              {title}
            </TypographyComp>

            <Table size="small" aria-label="purchases">
              <TableHeadComp cells={cells} />
              <TableBodyComp cells={cells} rows={rows} />
            </Table>
          </BoxComp>
        </Collapse>
      </TableCellComp>
    </TableRow>
  );
};

export default TableDetailComp;
