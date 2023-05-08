import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { rows, columns } from "./tableData";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  textAlign: "center",
  whiteSpace: "nowrap",
  width: "1%"
}));

const CustomDataGridDemo = () => {
  const [searchText, setSearchText] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setFilteredRows(
      rows.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        label="Search"
        value={searchText}
        onChange={handleSearchChange}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell>{row.component}</StyledTableCell>
                <StyledTableCell>{row.imageTag}</StyledTableCell>
                <StyledTableCell
                  style={{
                    color: row.status === "Ready" ? "green" : "red"
                  }}
                >
                  {row.status}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default CustomDataGridDemo;
