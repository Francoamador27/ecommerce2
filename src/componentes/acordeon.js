import MenuIcon from '@mui/icons-material/Menu';
import styles from "./acordion.module.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.0rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'red'
      ? '#991c20'
      : '#991c20',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '0',
  borderTop: '1px solid rgba(0, 0, 0, .125)',

}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><span className={styles.nombremenu}><MenuIcon/> Menu</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
  <nav className={styles.nav}>
          <ul className={styles.listadodesp}>
  <li><a href="">Colchones</a></li>
  <li><a href="">Electro</a></li>
  <li><a href="">Bicicletas</a></li>
  <li><a href="">Tecno</a></li>
  <li><a href="">Mas</a></li>
</ul>
</nav>
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      
    </div>
  );
}