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
import { TCoin, TCoinDiff } from "../../types";
import converterStore from "../../store/converterStore";

const CryptoTable = observer(() => {
  const items: TCoin[] = currenciesStore.getItems;
  const diffObj: TCoinDiff = currenciesStore.getDiffObj;

  useEffect(() => {
    if (currenciesStore) {
      currenciesStore.fetchCoins();
      setInterval(() => {
        currenciesStore.fetchCoins();
      }, 30 * 1000);
    }
  }, []);

  const onClickRow = (coin: TCoin) => {
    if (converterStore) {
      converterStore.setSelectedCoin(coin);
    }
  };

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
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  hover={true}
                  onClick={() => onClickRow(coin)}
                >
                  <TableCell component="th" scope="row">
                    <Avatar src={coin.imageUrl} alt={coin.name + " icon"} />
                  </TableCell>
                  <TableCell align="left">{coin.name}</TableCell>
                  <TableCell align="left">{coin.fullName}</TableCell>
                  <TableCell
                    align="left"
                    style={{
                      backgroundColor: `${diffObj[coin.name]}`,
                    }}
                  >
                    ${coin.price}
                  </TableCell>
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
