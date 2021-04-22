import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("./selection.json");

const Icomoon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icomoon;