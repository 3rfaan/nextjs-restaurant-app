import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;

  const token = cookies.token;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(id);

        return res.status(200).json(product);
      } catch (error) {
        return res.status(500).json(error);
      }

    case "PUT":
      if (!token || token !== process.env.TOKEN) {
        return res.status(401).json({ msg: "Not authenticated" });
      }
      try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
        });

        return res.status(201).json(product);
      } catch (error) {
        return res.status(500).json(error);
      }
    case "DELETE":
      if (!token || token !== process.env.TOKEN) {
        return res.status(401).json({ msg: "Not authenticated" });
      }
      try {
        await Product.findByIdAndDelete(id);

        return res.status(201).json({ msg: "The product has been deleted." });
      } catch (error) {
        return res.status(500).json(error);
      }
  }
}
