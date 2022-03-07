import {
  Button,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../app/store/configureStore";
import BasketSummary from "./BasketSummary";
import BasketTable from "./BasketTable";

export default function BasketPage() {
  const { basket} = useAppSelector(st => st.basket); 

  if (!basket)
    return <Typography variant="h3">Your Basket is empty</Typography>;

  return (
    <>
      <BasketTable items={basket.items} isBasket={true} />
      <Grid container>
        <Grid item xs={7} />
        <Grid item xs={5}>
          <BasketSummary />
          <Button
            component={Link}
            href={"/checkout"}
            variant="contained"
            size="small"
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

