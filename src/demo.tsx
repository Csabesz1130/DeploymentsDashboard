import React, { useState } from "react";
import data from "./data";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem
} from "@mui/material";
const generateVirtualID = (namespace, deployment) => {
  return namespace + "/" + deployment;
};
const processedData = data.map((row, index) => {
  const virtualID = generateVirtualID(row.namespace, row.component);
  return {
    ...row,
    id: virtualID
  };
});

const CustomTable = () => {
  const [statusFilter, setStatusFilter] = React.useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(data);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setFilteredRows(
      data.filter((row) =>
        row.component.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };
  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
    if (event.target.value === "") {
      setFilteredRows(data);
    } else {
      setFilteredRows(data.filter((row) => row.status === event.target.value));
    }
  };

  return (
    <Box>
      <TextField
        sx={{ marginBottom: 2 }}
        label="Search"
        variant="outlined"
        size="small"
        value={searchText}
        onChange={handleSearchChange}
      />
      <Select
        sx={{ marginBottom: 2, marginLeft: 2 }}
        value={statusFilter}
        onChange={handleFilterChange}
        displayEmpty
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Ready">Ready</MenuItem>
        <MenuItem value="ImgPullError">ImgPullError</MenuItem>
        <MenuItem value="OOMKilled">OOMKilled</MenuItem>
      </Select>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center" colSpan={2}>
                TEST
              </TableCell>
              <TableCell align="center" colSpan={2}>
                EDU
              </TableCell>
              <TableCell align="center" colSpan={2}>
                DEV
              </TableCell>
              <TableCell align="center" colSpan={2}>
                UAT
              </TableCell>
              <TableCell align="center" colSpan={2}>
                PROD
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.component}</TableCell>
                <TableCell>{row.imageTag}</TableCell>
                <TableCell
                  style={{
                    color: row.status === "Ready" ? "green" : "red"
                  }}
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default function App() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <CustomTable />
    </Box>
  );
}
