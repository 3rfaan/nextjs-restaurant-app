import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (
      username === process.env.USERNAME &&
      password === process.env.PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      return res.status(200).json({ msg: "Succesfull" });
    } else {
      return res.status(400).json({ msg: "Wrong credentials" });
    }
  }
}
