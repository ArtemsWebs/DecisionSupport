import { GridColumns, GridRowsProp } from '@mui/x-data-grid';
import faker from '@faker-js/faker';

export const dataGenerator = (columnsCount: number, rowsCount: number, maxValue?: number, minValue?: number) => {
  const columnsMas: GridColumns = [];
  const rowsMas: GridRowsProp = [];
  columnsMas.push({ field: 'name', headerName: 'Name/Task', width: 180, editable: true });
  for (let i = 0; i < columnsCount; i++) {
    columnsMas.push({ field: `work${i}`, headerName: `Задача ${i}`, width: 120, editable: true });
  }

  for (let i = 0; i < rowsCount; i++) {
    // @ts-ignore
    rowsMas.push({ id: i, name: faker.name.findName(), width: 100 });
    for (let j = 0; j < columnsCount; j++) {
      // @ts-ignore
      rowsMas.find((row) => row.id === i)[`work${j}`] = faker.datatype.number({
        min: minValue ? minValue : 1,
        max: maxValue ? maxValue : 100,
      });
    }
  }

  const columns: GridColumns = columnsMas;

  const rows: GridRowsProp = rowsMas;

  return { rows, columns };
};
