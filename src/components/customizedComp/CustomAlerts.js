import { AlertComp, AlertTitleComp } from "../AlertMaterial";

export const SuccessAlert = (props) => {
  return (
    <>
      <AlertComp variant="filled" severity="success">
        <AlertTitleComp>componentsText.success</AlertTitleComp>
        {props.text ? props.text : "Alert Success Text"}
      </AlertComp>
    </>
  );
};

export const InfoAlert = (props) => {
  return (
    <>
      <AlertComp variant="filled" severity="info">
        <AlertTitleComp>componentsText.success</AlertTitleComp>
        {props.text ? props.text : "Alert Info Text"}
      </AlertComp>
    </>
  );
};

export const WarningAlert = (props) => {
  return (
    <>
      <AlertComp variant="filled" severity="warning">
        <AlertTitleComp>componentsText.warning</AlertTitleComp>
        {props.text ? props.text : "Alert Warning Text"}
      </AlertComp>
    </>
  );
};

export const ErrorAlert = (props) => {
  return (
    <>
      <AlertComp variant="filled" severity="error">
        <AlertTitleComp>componentsText.error</AlertTitleComp>
        {props.text ? props.text : "Alert Error Text"}
      </AlertComp>
    </>
  );
};
