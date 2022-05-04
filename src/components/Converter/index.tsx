import React from "react";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react";

const paperStyle = {
  p: 1,
};

const Converter = observer(() => {
  return (
    <Paper sx={paperStyle}>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Сумма"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Сумма"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
});

export default Converter;
