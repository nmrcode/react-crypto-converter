import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

const paperStyle = {
  p: 1,
};

function App() {
  const [allCoins, setAllCoins] = useState();

  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      )
      .then(({ data }) => {
        const coins = data.Data;
        setAllCoins(coins);
      })
      .catch((e) => console.log(`${e}`));
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">FullName</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Pricing</TableCell>
                  <TableCell align="left">Volume 24h</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    name
                  </TableCell>
                  <TableCell align="left">1</TableCell>
                  <TableCell align="left">1</TableCell>
                  <TableCell align="left">1</TableCell>
                  <TableCell align="left">1</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
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
            <Typography
              component="p"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              68,25 Российский рубль
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
