// ❌ Wrong - With Vulnerability
import jwt from "jsonwebtoken"

const secret = "my-super-super-secret-key";

app.post('/login', (req, res) => {
  const user = { id: 123, name: "John Doe" }

  const token = jwt.sign(user, secret)

  res.json({ token })  
})