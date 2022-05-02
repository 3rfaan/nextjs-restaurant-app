import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const orders = await Order.find();

        return res.status(200).json(orders);
      } catch (error) {
        return res.status(500).json(error);
      }

    case "POST":
      try {
        const order = await Order.create(req.body);

        return res.status(201).json(order);
      } catch (error) {
        return res.status(500).json(error);
      }
  }
}
