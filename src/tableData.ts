import { GridColDef } from "@mui/x-data-grid";
import data from "./data";
import React from "react";
function extractNamespaceAndDeployment(id) {
  const regex = /^([\w-]+)\/([\w-]+)$/;
  const match = id.match(regex);

  if (match) {
    return {
      namespace: match[1],
      deployment: match[2]
    };
  }

  return {
    namespace: "",
    deployment: ""
  };
}

export const columns: GridColDef[] = [
  // ... other columns
  {
    field: "devImage",
    headerName: "DEV",
    width: 200,
    renderCell: (params) => params.row.imageTag
  },
  {
    field: "eduImage",
    headerName: "EDU",
    width: 200,
    renderCell: (params) => params.row.imageTag
  },
  {
    field: "uatImage",
    headerName: "UAT",
    width: 200,
    renderCell: (params) => params.row.imageTag
  },
  {
    field: "prodImage",
    headerName: "PROD",
    width: 200,
    renderCell: (params) => params.row.imageTag
  },
  {
    field: "testImage",
    headerName: "TEST",
    width: 200,
    renderCell: (params) => params.row.imageTag
  }
  // Add similar columns for other environments
];

export const rows = data.map((item, index) => {
  const environment =
    item.namespace.match(/(dev|test\w*|uat|prod|edu)$/)?.[0] || "";
  return {
    id: index,
    component: item.component,
    imageTag: item.imageTag,
    environment: environment,
    status: item.status
  };
});
