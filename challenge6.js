// ❌ Wrong - With Vulnerability
// assume the RegEx validates correctly
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

app.post('/validateEmail', (req, res) => {

  const email = req.body.email
  if (!email || !emailRegex.test(email)) {
    return res.status(400).send({ error: 'Invalid email'})
  }

  return req.status(200).send({ valid: true })
})