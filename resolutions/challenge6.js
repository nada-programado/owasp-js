// ✅ Right - Without Vulnerability
/* 
The problem here is that validating using RegEx becomes very verbose and difficult to maintain. Therefore, at these times it is good to use some validation library. e.g.:
https://www.npmjs.com/package/validator
*/
import validator from "validator"

app.post('/validateEmail', (req, res) => {

  const email = req.body.email
  if (!email || !validator.isEmail(email)) {
    return res.status(400).send({ error: 'Invalid email'})
  }

  return req.status(200).send({ valid: true })
})