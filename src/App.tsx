import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { Converter, CryptoTable } from "./components";
import { TCoin } from "./types";

function App() {
  const [allCoins, setAllCoins] = useState<TCoin[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD"
      )
      .then(({ data }) => {
        console.log(data);
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(3),
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
        Криптовалюта
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {!allCoins.length ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress size={100} />
            </Box>
          ) : (
            <CryptoTable items={allCoins} />
          )}
        </Grid>
        <Grid item xs={4}>
          <Converter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
