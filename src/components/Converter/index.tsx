import React from "react";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { observer } from "mobx-react";
import currenciesStore from "../../store/currenciesStore";

const paperStyle = {
  p: 1,
};

const Converter = observer(() => {
  const coins: string[] = currenciesStore.getItems.map((coin) => coin.name);

  return (
    <>
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
              <Select value={coins[0]}>
                {coins.map((name) => (
                  <MenuItem value={name} key={name}>
                    {name}
                  </MenuItem>
                ))}
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
              <Select value={coins[0]}>
                {coins.map((name) => (
                  <MenuItem value={name} key={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <Typography component={"p"} sx={{ mt: 3 }}>
        Каждые <strong>30 сек.</strong> уходит запрос и если цена изменилась, то
        ячейка окрашивается
      </Typography>
    </>
  );
});

export default Converter;
