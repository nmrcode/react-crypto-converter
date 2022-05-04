import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React from "react";

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>1</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
