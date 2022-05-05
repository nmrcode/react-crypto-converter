import React, { useReducer } from "react";
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
import converterStore from "../../store/converterStore";

const paperStyle = {
  p: 1,
};

type TReducerState = {
  value1: string;
  value2: string;
  inPrice: number;
  outPrice: number;
};

type TSetValue1Action = {
  type: string;
  payload: string;
};

type TAction = TSetValue1Action;

function reducer(state: TReducerState, action: any): TReducerState {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        value2: String(
          (Number(action.payload.value) * state.inPrice) / state.outPrice
        ),
      };

    case "SET_PRICES":
      return {
        ...state,
        inPrice: action.payload.in,
        outPrice: action.payload.out,
      };

    default:
      return state;
  }
}

const Converter = observer(() => {
  const [selectedOutCoin, setSelectedOutCoin] = React.useState("USD");
  const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);
  const inPrice = Number(converterStore?.getSelectedCoin.price) || 0;
  const outPrice =
    Number(
      currenciesStore!.getItems.find((obj) => obj.name === selectedOutCoin)
        ?.price
    ) || 0;
  const [state, dispatch] = useReducer(reducer, {
    value1: "",
    value2: "",
    inPrice,
    outPrice,
  });

  React.useEffect(() => {
    dispatch({
      type: "SET_PRICES",
      payload: {
        in: inPrice,
        out: outPrice,
      },
    });
  }, [inPrice, outPrice]);

  const onUpdateField = (name: string, value: string) => {
    dispatch({
      type: "SET_VALUE",
      payload: {
        name,
        value,
      },
    });
  };

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
              value={state.value1}
              onChange={(e: any) => onUpdateField("value1", e.target.value)}
              type={"number"}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
              <Select value={converterStore.getSelectedCoin.name}>
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
              value={state.value2}
              type={"number"}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
              <Select
                value={selectedOutCoin}
                onChange={(e) => setSelectedOutCoin(e.target.value)}
              >
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
