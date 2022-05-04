import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import {
  Avatar,
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

type TCoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
};

function App() {
  const [allCoins, setAllCoins] = useState<TCoin[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      )
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(2),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        setAllCoins(coins);
      })
      .catch((e) => console.log(`${e}`));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Typography
        component={"h1"}
        variant={"h2"}
        textAlign={"center"}
        sx={{ mb: 5 }}
      >
        Crypto converter
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Icon</TableCell>
                  <TableCell align="left">FullName</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Pricing</TableCell>
                  <TableCell align="left">Volume 24h</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCoins.map((coin) => (
                  <TableRow
                    key={coin.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Avatar src={coin.imageUrl} alt={coin.name + " icon"} />
                    </TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell align="left">${coin.price}</TableCell>
                    <TableCell align="left">${coin.volume24Hour}</TableCell>
                  </TableRow>
                ))}
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
