import React, { Fragment } from "react";

const Content = ({ activeSidebarItemKey, contentItems }) => {
  return (
    <Fragment>
      {contentItems.map(
        (item, index) =>
          item.key === activeSidebarItemKey && (
            <item.component key={index} item={item} />
          )
      )}
    </Fragment>
  );
};

export default Content;
