const mercadopago = require("mercadopago");
const mercadoPagoKey = require("../config/payment.config");

const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: mercadoPagoKey,
  });
  price = req.body;
  console.log(req.body);

  try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: "Poductos varios",
          unit_price: price,
          currency_id: "ARS",
          quantity: 1,
        },
      ],
      notification_url: "https://e720-190-237-16-208.sa.ngrok.io/webhook",
      back_urls: {
        success: "http://localhost:4200/succes",
        // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
        // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
      },
    });

    console.log(result);

    // res.json({ message: "Payment creted" });
    res.json(result.body);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    console.log(payment);
    if (payment.type === "payment") {
      const data = await mercadopage.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

module.exports = { createOrder, receiveWebhook };
