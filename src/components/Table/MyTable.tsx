import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import styled from 'styled-components';
import { dataGenerator } from '../../utils/dataGenerator';

interface MyTable extends DataGridProps {
  max?: number;
  min?: number;
  rowsCount: number;
  columnsCount: number;
  setData: React.Dispatch<React.SetStateAction<never[]>>;
}

const MyTable = ({ max, min, setData, rowsCount, columnsCount, ...props }: MyTable) => {
  const [allTableData, setAllTableData] = React.useState<ReturnType<typeof dataGenerator>>(null);
  console.log(allTableData);
  React.useEffect(() => {
    setAllTableData(dataGenerator(columnsCount, rowsCount, max, min));
  }, [columnsCount, rowsCount, max, min]);
  return (
    <TableWrapper>
      {allTableData && (
        <DataGrid
          rows={allTableData?.rows}
          columns={allTableData.columns}
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
          {...props}
        />
      )}
    </TableWrapper>
  );
};
const TableWrapper = styled.div`
  width: 100%;
`;
export default MyTable;
