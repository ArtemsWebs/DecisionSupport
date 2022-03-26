import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const MyTable = ({}) => {
    return(
  <TableWrapper key={criterial.id}>
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight={true}
      pagination={undefined}
      hideFooterPagination={true}
      hideFooterSelectedRowCount={true}
      hideFooter={true}
      /*@ts-ignore*/
      onEditCellPropsChange={(params) => {
        /*@ts-ignore*/
        setData([params]);
      }}
    />
  </TableWrapper>
)
};

export default MyTable;
