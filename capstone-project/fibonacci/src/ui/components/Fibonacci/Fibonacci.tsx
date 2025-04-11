import { Box, Button, Card, Container, FormControl, Input, InputLabel } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';
import { HourglassBottom } from '@mui/icons-material';

import { fibonacci } from './utils';

const Fibonacci: FC = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setValue(isNaN(value) || (value < 0) ? 0 : value);
  };

  const onCalcClick = async () => {
    setIsRunning(true);
    setResult(await fibonacci(value));
    setIsRunning(false);
  };

  return (
    <Container maxWidth="lg">
      <Card sx={{ p: 2, m: 4 }}>
        <Box sx={{ gap: 2, flexFlow: 'column', display: 'flex' }}>
          <Box sx={{ 'alignItems': 'center', gap: 2, display: 'flex' }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="fibonacci-value">Number</InputLabel>
              <Input id="fibonacci-value" type="number" value={value || ''} disabled={isRunning} onChange={onValueChange} />
            </FormControl>
            <Button disabled={isRunning} onClick={onCalcClick} endIcon={isRunning && <HourglassBottom />}>Calc</Button>
          </Box>
          <Box>
            F({value}) = {result}
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Fibonacci;
