import React from "react";

export interface route {
  path: string;
  component: React.ReactElement;
  exact: boolean;
}
