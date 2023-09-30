const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateCheckout(req, res) {
  const { item,values,customPrice } = req.body;

  

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://snow-removal-side.vercel.app/";

  const itemSold = {
    price_data: {
      currency: "cad",
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        description: item.description,
      },
    },
    quantity: item.quantity,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [itemSold],
    mode: "payment",
    // success_url: redirectURL + "?status=success",
    success_url: redirectURL +"/success?formdata="+JSON.stringify(values)+"&price="+JSON.stringify(item.price)+"&customPrice="+JSON.stringify(customPrice),
    cancel_url: redirectURL + "/failure",
    metadata: {},
    automatic_tax: {
      enabled: true,
    },
    // shipping_address_collection: {
    //   allowed_countries:  ["CA"],
    // },
   
    

  });

  res.json({ id: session.id});
}

export default CreateCheckout;
