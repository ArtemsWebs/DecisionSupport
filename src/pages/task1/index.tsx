import React from 'react';
import { Button } from '@mui/material';
import MyDrawer from '../../components/widgets/MyDrawer';
import { defaultWorkerValue, defaultWorkValue } from '../../data/data';
import MyTable from '../../components/Table/MyTable';
import Setting from '../../components/setting/Setting';


export type tableSettingType = {
  rowCounts: number;
  columnCounts: number;
  criterials: Criterial[] | [];
  maximumRange: number;
};

export type DataRange = {
  min?: number;
  max?: number;
};
export type Type = 'max' | 'min';

export const defaultDataRange = { min: 0, max: 10 };

export type Criterial = {
  id: number;
  name: string;
  autoGenerationData?: boolean;
  dataRange?: DataRange;
  type: Type;
  limitations?: number;
};

const Task1 = () => {
  const [data, setData] = React.useState([]);
  const [tableSetting, setTableSetting] = React.useState<tableSettingType>({
    rowCounts: defaultWorkerValue,
    columnCounts: defaultWorkValue,
    criterials: [],
    maximumRange: 100,
  });
  const [open, setOpen] = React.useState(false);
  const onSave = React.useCallback((setting: tableSettingType) => setTableSetting(setting), [setTableSetting]);
  console.dir(tableSetting);
  // @ts-ignore
  return (
    <>
      {tableSetting.criterials.length>0 ? (<>{tableSetting.criterials.map((criterial) => {
          return (
              <MyTable
                  key={criterial.id}
                  setData={setData}
                  min={criterial.dataRange?.min}
                  max={criterial.dataRange?.max}
                  rowsCounts={tableSetting.rowCounts}
                  columnsCounts={tableSetting.columnCounts}
              />
          );
        })}
        <MyDrawer open={open} tableSetting={tableSetting} changeTableSetting={onSave} onClose={() => setOpen(false)} />
        <Button variant="contained" color="success" onClick={() => setOpen((prevState) => !prevState)}>
        Настройки Среды задачи
        </Button>
      </>)
            :(<Setting tableSetting={tableSetting} changeTableSetting={onSave}/>)}
    </>
  );
};
//const TaskWrapper = styled.div``;
export default Task1;
