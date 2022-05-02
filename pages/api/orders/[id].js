import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const order = await Order.findById(id);

        return res.status(200).json(order);
      } catch (error) {
        return res.status(500).json(error);
      }

    case "PUT":
      try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        return res.status(201).json(order);
      } catch (error) {
        return res.status(500).json(error);
      }

    case "DELETE":
  }
}
