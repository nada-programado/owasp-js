// ✅ Right - Without Vulnerability
/*
The problem is that when you pass req.body, you have no control over how much data is coming from body. e.g.:
 -> username, password, email, isAdmin
*/
import { encryptPassowrd } from "./util/passwords"

app.post('signup', (req, res) => {
  db.users.find({
    "username": req.body.username
  }, async (err, result) => {
    if (err) {
      return res.status(500).json({ msg: 'Error '})
    } else if (result.length === 0) {
      await db.users.insert({ username: String(req.body.username), email: String(req.body.email), password: encryptPassowrd(req.body.password)})
      return res.status(201)
    } else {
      return res.status(409)
    }
  })
})