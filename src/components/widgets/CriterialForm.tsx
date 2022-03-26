import React from 'react';
import { Criterial, Type } from '../../pages/task1';
import styled from 'styled-components';
import { Button, Checkbox, Divider, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { castToNumber } from '../../utils/castToNumber';

interface CriterialFormProps {
  criterial: Criterial;
  onChangeCriterials: React.Dispatch<React.SetStateAction<Criterial[] | []>>;
}

const CriterialForm = ({ criterial, onChangeCriterials }: CriterialFormProps) => {
  return (
    <CriterialFormWrapper>
      <FormChangeWrapper>
        <TextFieldStyled
          id="standard-basic"
          label="Введите название критерия"
          variant="standard"
          value={criterial.name}
          onChange={(e) =>
            onChangeCriterials((prevState) => {
              return prevState.map((_criterial) => {
                if (criterial.id === _criterial.id) return { ..._criterial, name: e.target.value };
                return { ..._criterial };
              });
            })
          }
        />
        <SelectWrapper>
          <InputLabel id="demo-simple-select-label">Направление критерия</InputLabel>
          <Select
            sx={{ maxHeight: 45 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={criterial.type}
            label="Направление критерия"
            onChange={(e) =>
              onChangeCriterials((prevState) => {
                return prevState.map((_criterial) => {
                  if (criterial.id === _criterial.id) return { ..._criterial, type: e.target.value as Type };
                  return { ..._criterial };
                });
              })
            }
          >
            <MenuItem value="max">max</MenuItem>
            <MenuItem value="min">min</MenuItem>
          </Select>
        </SelectWrapper>
        <FormControlLabel
          control={
            <Checkbox
              checked={criterial.autoGenerationData}
              onChange={() =>
                onChangeCriterials((prevState) => {
                  return prevState.map((_criterial) => {
                    if (criterial.id === _criterial.id)
                      return { ..._criterial, autoGenerationData: !criterial.autoGenerationData };
                    return { ..._criterial };
                  });
                })
              }
            />
          }
          label="Автогенирация данных"
        />
        {/*@TODO можно вынести в отдельный элемент*/}
        {criterial.autoGenerationData && (
          <DataRangeWrapper>
            <TextFieldStyled
              id="standard-basic"
              label="Введите минимальное значение"
              variant="standard"
              inputProps={{ inputMode: 'numeric' }}
              value={criterial?.dataRange?.min ? criterial.dataRange.min : 0}
              onChange={(e) =>
                onChangeCriterials((prevState) => {
                  return prevState.map((_criterial) => {
                    if (criterial.id === _criterial.id)
                      return {
                        ..._criterial,
                        dataRange: {
                          ..._criterial.dataRange,
                          min: castToNumber(e.target.value),
                        },
                      };
                    return { ..._criterial };
                  });
                })
              }
            />
            <Separator variant="middle" sx={{ backgroundColor: 'black' }} />
            <TextFieldStyled
              id="standard-basic"
              label="Введите максимальное значение"
              variant="standard"
              inputProps={{ inputMode: 'numeric' }}
              value={criterial?.dataRange?.max ? criterial.dataRange.max : 10}
              onChange={(e) =>
                onChangeCriterials((prevState) => {
                  return prevState.map((_criterial) => {
                    if (criterial.id === _criterial.id)
                      return {
                        ..._criterial,
                        dataRange: {
                          ..._criterial.dataRange,
                          max: castToNumber(e.target.value),
                        },
                      };
                    return { ..._criterial };
                  });
                })
              }
            />
          </DataRangeWrapper>
        )}
      </FormChangeWrapper>
      <ButtonWrapper>
        <Button
          startIcon={<DeleteForeverIcon color="error" />}
          onClick={() =>
            onChangeCriterials((prevState) => prevState.filter((_criterial) => _criterial.id != criterial.id))
          }
          color="error"
        >
          Удалить
        </Button>
      </ButtonWrapper>
    </CriterialFormWrapper>
  );
};

const FormChangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
const SelectWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;
const TextFieldStyled = styled(TextField)`
  margin-bottom: 30px !important;
  width: 100%;
`;
const CriterialFormWrapper = styled.div``;
const DataRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
const Separator = styled(Divider)`
  width: 40px;
`;
export default CriterialForm;
