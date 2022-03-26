import React from 'react';
import { tableSettingType } from '../../pages/task1';
import { Button, Drawer, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { useValidation } from '../../utils/useValidation';
import { castToNumber } from '../../utils/castToNumber';
import MyDivider from './MyDivider';
import MyAccordion from './MyAccordion';
import Setting from '../setting/Setting';

//type Error = { id: number; message: string | null }[];

interface MyDrawerProp {
  tableSetting: tableSettingType;
  open: boolean;
  changeTableSetting: (setting: tableSettingType) => void;
  onClose: () => void;
}

const MyDrawer = ({ tableSetting, open, changeTableSetting, onClose }: MyDrawerProp) => {
  return (
    <>
      <Drawer open={open} anchor="right" sx={{ minWidth: 300 }}>
        <Setting tableSetting={tableSetting} changeTableSetting={changeTableSetting}
                 settingControlElement={ <Button variant="contained" color="success" onClick={onClose}>
                    Закрыть
                  </Button>}
        />
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
export default MyDrawer;
