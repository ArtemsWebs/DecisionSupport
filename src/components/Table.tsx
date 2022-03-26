import React from 'react';

import { Column, useTable } from 'react-table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type Row = { col1: React.ReactNode; col2: React.ReactNode };
interface MyTableProps {
  data: Row[];
  columns: Column<Row>[];
}

const MyTable = ({ data, columns }: MyTableProps) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, key) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} key={key}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()} key={i}>
              {row.cells.map((cell, cellIndex) => {
                return (
                  <TableCell {...cell.getCellProps()} key={`rows_${cellIndex}`}>
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
//const TaskWrapper = styled.div``;
export default MyTable;
