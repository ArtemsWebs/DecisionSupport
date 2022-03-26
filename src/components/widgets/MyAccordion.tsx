import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { Criterial } from '../../pages/task1';
import CriterialForm from './CriterialForm';
import AddTaskIcon from '@mui/icons-material/AddTask';

interface CustomAccordionProps {
  criterials: Criterial[] | null;
  onChangeCriterials: React.Dispatch<React.SetStateAction<Criterial[] | []>>;
}

const MyAccordion = ({ criterials, onChangeCriterials }: CustomAccordionProps) => {
  return (
    <AccordionWrapper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Критерии</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {criterials &&
            criterials.map((criterial) => (
              <StyledAccordion key={criterial.id}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>{criterial.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <CriterialForm criterial={criterial} onChangeCriterials={onChangeCriterials} />
                </AccordionDetails>
              </StyledAccordion>
            ))}
          <ButtonWrapper>
            <Button
              startIcon={<AddTaskIcon color="success" />}
              onClick={() =>
                onChangeCriterials((prevState) => {
                  if (prevState.length < 1) return [{ id: 0, name: '', type: 'max' }];
                  return [...prevState, { id: prevState.length, name: '', type: 'max' }];
                })
              }
              color="success"
            >
              Добавить критерий
            </Button>
          </ButtonWrapper>
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  margin: 10px 15px !important;
`;
const StyledAccordion = styled(Accordion)`
  margin-bottom: 10px;
`;
//@TODO вынести в widgets, это как обертка под кнопки
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export default MyAccordion;
