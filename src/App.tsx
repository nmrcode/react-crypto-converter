import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import { Converter, CryptoTable } from "./components";
import Title from "./components/Title/Title";

function App() {
  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 12 }}>
      <Title text={"Конвертер"} />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CryptoTable />
        </Grid>
        <Grid item xs={4}>
          <Converter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
