export default defineEventHandler(async (event) => {
  const stripe = require("stripe")(
    "sk_test_51Ox1Kx01BTElFFxUxItgnWUpp5tDOzVJ3vEadf1zmMspi3qfCu6g0BotCBkJ5EfKrFibQSidCZFHTzdIhoLK9TAo00Gibtt5jV"
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return paymentIntent;
});
