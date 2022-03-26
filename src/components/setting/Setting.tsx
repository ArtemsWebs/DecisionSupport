import React from 'react';
import styled from "styled-components";
import {castToNumber} from "../../utils/castToNumber";
import {useValidation} from "../../utils/useValidation";
import {Button, ButtonGroup, TextField, Typography} from "@mui/material";
import {Controller} from "react-hook-form";
import MyDivider from "../widgets/MyDivider";
import MyAccordion from "../widgets/MyAccordion";
import {tableSettingType} from "../../pages/task1";

interface SettingProps {
    tableSetting: tableSettingType;
    changeTableSetting: (setting: tableSettingType) => void;
    settingControlElement?: React.ReactNode;
}
const Setting=({tableSetting, changeTableSetting, settingControlElement}: SettingProps)=>{
    const [workerCount, setWorkerCount] = React.useState<string>(tableSetting.rowCounts.toString());
    const [workCount, setWorkCount] = React.useState<string>(tableSetting?.columnCounts?.toString());
    const [localCriterials, setLocalCriterials] = React.useState(tableSetting.criterials);
    const onSave = React.useCallback(() => {
        changeTableSetting({
            // @ts-ignore
            rowCounts: castToNumber(workerCount) ? castToNumber(workerCount) : undefined,
            // @ts-ignore
            columnCounts: castToNumber(workCount) ? castToNumber(workerCount) : undefined,
            maximumRange: 100,
            criterials: localCriterials,
        });
    }, [changeTableSetting, localCriterials]);

    console.log(localCriterials);
    const { errors, control, onChangeWorkCount, onChangeWorkerCount, handleSubmit } = useValidation(
        {
            workerCount: workerCount,
            workCount: workCount,
        },
        { workSetter: setWorkCount, workerSetter: setWorkerCount },
    );
    return(
        <SettingWrapper>
            <Typography align="center" sx={{ margin: '20px 15px' }}>
                Наcтройки задачи
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
            <MyDivider />
            <MyAccordion criterials={localCriterials} onChangeCriterials={setLocalCriterials} />
            <MyDivider />
            <ButtonGroup>
                {settingControlElement}
                {/*@ts-ignore*/}
                <Button variant="contained" color="success" onClick={handleSubmit(() => onSave())}>
                    Сохранить
                </Button>
            </ButtonGroup>
        </SettingWrapper>
    )
}

const SettingWrapper=styled.div``;
const TextFieldStyled = styled(TextField)`
  margin: 10px 15px !important;
  padding: 0 10px !important;
`;

export default Setting
