import React from 'react';
import { tableSettingType } from '../pages/task1';
import { Button, Divider, Drawer, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { useValidation } from '../utils/useValidation';
import { castToNumber } from '../utils/castToNumber';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomAccordion from './widgets/Accordion';

//type Error = { id: number; message: string | null }[];

interface MyDrawerProp {
  tableSetting: tableSettingType;
  open: boolean;
  changeTableSetting: (setting: tableSettingType) => void;
  onClose: () => void;
}

const MyDrawer = ({ tableSetting, open, changeTableSetting, onClose }: MyDrawerProp) => {
  const [workerCount, setWorkerCount] = React.useState<string>(tableSetting.rowCounts.toString());
  const [workCount, setWorkCount] = React.useState<string>(tableSetting?.columnCounts?.toString());
  const { errors, control, onChangeWorkCount, onChangeWorkerCount, handleSubmit } = useValidation(
    {
      workerCount: workerCount,
      workCount: workCount,
    },
    { workSetter: setWorkCount, workerSetter: setWorkerCount },
  );
  console.dir(errors);
  return (
    <>
      <Drawer open={open} anchor="right" sx={{ minWidth: 300 }}>
        <Typography align="center" sx={{ margin: '20px 15px' }}>
          Наcтройки таблицы
        </Typography>
        <Controller
          name="workerCount"
          control={control}
          render={({ field }) => (
            <TextFieldStyled
              error={!!errors.workerCount}
              helperText={errors?.workerCount?.message}
              id="standard-basic"
              label="Введите количество работников"
              variant="standard"
              value={field.value}
              onChange={(e) => onChangeWorkerCount(e.target.value)}
            />
          )}
        />
        <Controller
          name="workCount"
          control={control}
          render={({ field }) => (
            <TextFieldStyled
              error={!!errors.workCount}
              helperText={errors?.workCount?.message}
              id="standard-basic"
              label="Введите количество работ"
              variant="standard"
              value={field.value}
              onChange={(e) => onChangeWorkCount(e.target.value)}
            />
          )}
        />
        <Divider />
        <CustomAccordion />
        <Divider />
        <ButtonGroup>
          <Button variant="contained" color="success" onClick={onClose}>
            Закрыть
          </Button>
          {/*@ts-ignore*/}
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit(() =>
              changeTableSetting({
                // @ts-ignore
                rowCounts: castToNumber(workerCount) ? castToNumber(workerCount) : undefined,
                // @ts-ignore
                columnCounts: castToNumber(workCount) ? castToNumber(workerCount) : undefined,
                maximumRange: 100,
              }),
            )}
          >
            Сохранить
          </Button>
        </ButtonGroup>
      </Drawer>
    </>
  );
};
const DrawerTitel = styled.h3`
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
const TextFieldStyled = styled(TextField)`
  margin: 10px 15px !important;
  padding: 0 10px !important;
`;
export default MyDrawer;
