import React from "react";
import LanguageUseContext from "../../../../hooks/LanguageUseContext";

import TableCell from "@mui/material/TableCell";

const TableCellComp = (props) => {
  const {
    cell,
    children,
    isTranslation = true,
    isTransTextMethod,
    ...other
  } = props;
  const { translate } = LanguageUseContext();

  function cellTextReturn(cell, children, isTranslation, isTransTextMethod) {
    if (typeof children == "string" && isTranslation) {
      if (isTransTextMethod) {
        return translate(
          cell.settings.body.tableCell.transTextMethod(children)
        );
      } else {
        return translate(children);
      }
    } else {
      return children;
    }
  }

  return (
    <TableCell
      // Head Cell Props
      {...(cell?.settings?.head?.tableCell?.align
        ? { align: cell.settings.head.tableCell.align }
        : {})}
      style={{
        ...(cell?.settings?.head?.tableCell?.width
          ? { width: cell?.settings.head.tableCell.width }
          : {}),
      }}
      // Body Cell Props
      {...(cell?.settings?.body?.tableCell?.component
        ? { component: cell.settings.body.tableCell.component }
        : {})}
      {...(cell?.settings?.body?.tableCell?.scope
        ? { scope: cell.settings.body.tableCell.scope }
        : {})}
      {...(cell?.settings?.body?.tableCell?.align
        ? { align: cell.settings.body.tableCell.align }
        : {})}
      // Other Props
      {...other}
    >
      {cellTextReturn(cell, children, isTranslation, isTransTextMethod)}
    </TableCell>
  );
};

export default TableCellComp;
