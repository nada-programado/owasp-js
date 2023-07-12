// ❌ Wrong - With Vulnerability
const SOMEOBJECT = {}

app.get("/validateToken", (req, res) => {
  if (req.header('token')) {
    const token = Buffer.from(req.header('token'), 'base64')
    // should always be false
    if (SOMEOBJECT[token] && token) {
      return res.send("true")
    }
  }

  return res.send("false")
})