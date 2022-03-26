import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import { Criterial } from '../../pages/task1';

interface CustomAccordionProps {
  criterials: Criterial[];
}

const MyAccordion = ({ criterials }: CustomAccordionProps) => {
  return (
    <AccordionWrapper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Критерии</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {criterials.map((criterial) => (
            <CriterialForm />
          ))}
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  margin: 10px 15px !important;
`;
export default MyAccordion;
