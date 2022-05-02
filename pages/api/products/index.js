import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find();

        return res.status(200).json(products);
      } catch (error) {
        return res.status(500).json(error);
      }

    case "POST":
      if (!token || token !== process.env.TOKEN) {
        return res.status(401).json({ msg: "Not authenticated" });
      }
      try {
        const product = await Product.create(req.body);

        return res.status(201).json(product);
      } catch (error) {
        return res.status(500).json(error);
      }
  }
}
