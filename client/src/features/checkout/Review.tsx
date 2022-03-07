import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";
import { useAppSelector } from "../../app/store/configureStore";

export default function Review() {
  const { basket } = useAppSelector((st) => st.basket);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {basket &&
      <BasketTable items={basket.items} isBasket={false} />}
      <Grid container>
        <Grid item xs={7} />
        <Grid item xs={5}>
          <BasketSummary />
        </Grid>
      </Grid>
    </>
  );
}
