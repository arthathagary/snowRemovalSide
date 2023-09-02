const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
if (req.method === 'POST') {
try {
const payId = req.query.id;
console.log(payId);
let paymentId;
if(payId == 1){
paymentId = 'price_1NlpDpJmpiScpwkbXmWOxw2z'
}else if(payId ==12){
    paymentId = 'price_1NlqZTJmpiScpwkbCKpYrjJi'
}else if(payId ==13){
    paymentId = 'price_1Nlqb4JmpiScpwkb7DdHDOW5'
}else if(payId ==14){
    paymentId = 'price_1NlqbXJmpiScpwkbwhthzgVO'
}
else if (payId == 2){
paymentId = 'price_1NhF93JmpiScpwkbArq0t8Nh'
}else if (payId == 4){
paymentId = 'price_1NhHDCJmpiScpwkbagSr0oVT'
}else{
console.log("give correct payment id");
}
// Create Checkout Sessions from body params.
const session = await stripe.checkout.sessions.create({
line_items: [
{
// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
price: paymentId,
quantity: 1,
},
],
mode: 'payment',
success_url: `${req.headers.origin}/?success=true`,
cancel_url: `${req.headers.origin}/?canceled=true`,
});
res.redirect(303, session.url);
} catch (err) {
res.status(err.statusCode || 500).json(err.message);
}
} else {
res.setHeader('Allow', 'POST');
res.status(405).end('Method Not Allowed');
}
}

