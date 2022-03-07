import { Box, Typography, Button, Grid } from "@mui/material";
import { BasketItem } from "../../app/models/basket";
import { Order, OrderItem } from "../../app/models/order";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";

interface Props {
  order: Order;
  setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
  const subtotal =
    order.orderItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    ) ?? 0;
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ p: 2 }} gutterBottom variant="h4">Order# {order.id} - {order.orderStatus}</Typography>
        <Button onClick={() => setSelectedOrder(0)} sx={{ m: 2 }} size="large" variant="contained">BACK TO ORDERS</Button>
      </Box>
      
      <BasketTable items={convertToBarketItemArray(order.orderItems)} isBasket={false} />

      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary subtotal={subtotal} />
        </Grid>
      </Grid>
    </>
  );

  function convertToBarketItemArray(orderItems: OrderItem[]) {
    const basketItemArray: BasketItem[] = [];
    orderItems.forEach(o => {
        let b: BasketItem;
        b = {
            productId: o.productId,
            name: o.name,
            price: o.price,
            pictureUrl: o.productUrl,
            quantity: o.quantity,
            brand:'',
            type:''
         };
         basketItemArray.push(b);
    });

    return basketItemArray;
  }
}
