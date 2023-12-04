import * as React from "react";
import ApiUseContext from "../../hooks/ApiUseContext";
import styled from "styled-components";
import BoxComp from "../Box";
import CircularProgress from "@mui/material/CircularProgress";

const OverlayBox = styled(BoxComp)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default function OverlayComp() {
  const { loading } = ApiUseContext();

  return (
    loading && (
      <OverlayBox>
        <CircularProgress />
      </OverlayBox>
    )
  );
}
