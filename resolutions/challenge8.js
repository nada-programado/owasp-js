// ✅ Right - Without Vulnerability
/* 
The problem here is that it's showing the secret in the code. The correct thing is to save it in an .env
*/
import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET

app.post('/login', (req, res) => {
  const user = { id: 123, name: "John Doe" }

  const token = jwt.sign(user, secret)

  res.json({ token })  
})