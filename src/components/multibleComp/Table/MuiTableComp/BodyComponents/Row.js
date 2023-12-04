import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components/macro";

import TableCellComp from "../TableCellComp";
import TableDetailComp from "./TableDetailComp";
import DetailButton from "../CellComponents/DetailButton";
import ProcessColumn from "../CellComponents/ProcessColumn";
import ImageView from "../CellComponents/ImageView";
import IconView from "../CellComponents/IconView";

import TableRow from "@mui/material/TableRow";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
    // border: 0,
  },
}));

const ProcessColumnWrapper = styled(TableCellComp)`
  border-left: 1px solid gray;
`;

const Row = ({ row, cells }) => {
  const [open, setOpen] = useState(false);
  const [detailCells, setDetailCells] = useState([]);

  useEffect(() => {
    let result = cells.filter((x) => x.detail)[0]?.detail;
    setDetailCells(result);
  }, [row]);

  return (
    <Fragment>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {cells.map((cell, index) => {
          if (cell.isComponent) {
            if (cell.componentKey === "detailButton") {
              return (
                <TableCellComp key={index}>
                  <DetailButton open={open} setOpen={setOpen} />
                </TableCellComp>
              );
            } else if (cell.componentKey === "processColumn") {
              return (
                <ProcessColumnWrapper key={index}>
                  <ProcessColumn cell={cell} row={row} />
                </ProcessColumnWrapper>
              );
            } else if (cell.componentKey === "imageView") {
              return (
                <TableCellComp
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ImageView alt={row.src} src={row.image} />
                </TableCellComp>
              );
            } else if (cell.componentKey === "iconView") {
              return (
                <TableCellComp
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconView iconKey={row[cell.key]} />
                </TableCellComp>
              );
            }
          } else {
            return (
              <TableCellComp
                key={index}
                cell={cell}
                isTransTextMethod={
                  cell?.settings?.body?.tableCell?.transTextMethod
                }
              >
                {row[cell.key]}
              </TableCellComp>
            );
          }
        })}
      </StyledTableRow>

      {open && row.detail && row.detail?.items && (
        <TableDetailComp
          open={open}
          title={row.detail.title}
          cells={detailCells}
          rows={row.detail?.items}
        />
      )}
    </Fragment>
  );
};

export default Row;
