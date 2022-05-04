import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { observer } from "mobx-react";
import currenciesStore from "../../store/currenciesStore";

const CryptoTable = observer(() => {
  const items = currenciesStore.getItems;

  useEffect(() => {
    if (currenciesStore) {
      currenciesStore.fetchCoins();
    }
  }, []);

  return (
    <>
      {!items.length ? (
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Crypto table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="left">Сокращение</TableCell>
                <TableCell align="left">Полное название</TableCell>
                <TableCell align="left">Стоимость</TableCell>
                <TableCell align="left">Объем 24ч</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((coin) => (
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
      )}
    </>
  );
});
export default CryptoTable;
