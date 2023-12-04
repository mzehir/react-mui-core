import React from "react";
import TypographyComp from "../../../components/Typography";

function Title() {
  return (
    <React.Fragment>
      <TypographyComp component="h1" variant="h4" align="center" gutterBottom>
        sectionAuthText.welcomeTo
      </TypographyComp>

      <TypographyComp component="h2" variant="body1" align="center">
        sectionAuthText.signUpDesc
      </TypographyComp>
    </React.Fragment>
  );
}

export default Title;
