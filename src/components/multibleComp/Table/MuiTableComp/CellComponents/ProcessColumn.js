import React, { Fragment } from "react";
import LanguageUseContext from "../../../../../hooks/LanguageUseContext";

import IconButtonComp from "../../../../IconButton";
import TooltipComp from "../../../../Tooltip";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ZoomInSharpIcon from "@mui/icons-material/ZoomInSharp";

const processColumnWrapperStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "5px",
};

const ProcessColumn = ({ cell, row }) => {
  return (
    <div style={processColumnWrapperStyle}>
      {cell.desiredElements.map((desiredElement, desiredElementIndex) => (
        <Fragment key={desiredElementIndex}>
          {desiredElement.key === "edit" && (
            <EditItem item={desiredElement} row={row} />
          )}

          {desiredElement.key === "delete" && (
            <DeleteItem item={desiredElement} row={row} />
          )}

          {desiredElement.key === "detail" && (
            <DetailItem item={desiredElement} row={row} />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ProcessColumn;

const EditItem = ({ item, row }) => {
  const { onClick, tooltipText, isTranslation = true } = item;
  const { translate } = LanguageUseContext();

  return (
    <TooltipComp title={isTranslation ? translate(tooltipText) : tooltipText}>
      <div>
        <IconButtonComp
          size="small"
          color="primary"
          onClick={(event) => {
            onClick(event, row);
          }}
        >
          <EditIcon />
        </IconButtonComp>
      </div>
    </TooltipComp>
  );
};

const DeleteItem = ({ item, row }) => {
  const { onClick, tooltipText, isTranslation = true } = item;
  const { translate } = LanguageUseContext();

  return (
    <TooltipComp title={isTranslation ? translate(tooltipText) : tooltipText}>
      <div>
        <IconButtonComp
          size="small"
          color="error"
          onClick={(event) => {
            onClick(event, row);
          }}
        >
          <DeleteIcon />
        </IconButtonComp>
      </div>
    </TooltipComp>
  );
};

const DetailItem = ({ item, row }) => {
  const { onClick, tooltipText, isTranslation = true } = item;
  const { translate } = LanguageUseContext();

  return (
    <TooltipComp title={isTranslation ? translate(tooltipText) : tooltipText}>
      <div>
        <IconButtonComp
          size="small"
          color="primary"
          onClick={(event) => {
            onClick(event, row);
          }}
        >
          <ZoomInSharpIcon />
        </IconButtonComp>
      </div>
    </TooltipComp>
  );
};
