import FileCopyIcon from '@mui/icons-material/FileCopy';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const DataTable = ({ data, columns }) => {
  const handleCopy = () => {
    const copyText = data.map(row => columns.map(col => row[col]).join('\t')).join('\n');
    navigator.clipboard.writeText(copyText).then(() => {
      alert('Table data copied to clipboard');
    });
  };

  return (
    <TableContainer component={Paper} sx={{ fontSize: '0.875rem', maxHeight: '400px', overflowY: 'auto' }}>
      <IconButton onClick={handleCopy} style={{ float: 'right' }}>
        <FileCopyIcon />
      </IconButton>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column}>{row[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
