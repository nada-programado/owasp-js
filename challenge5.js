// ❌ Wrong - With Vulnerability
app.post('/user', (req, res) => {
  // assume the user is authenticated
  db.collection('users').find({
    "username": req.body.username
  }, (err, result) => {
    if (err || !result) {
      return res.status(500).send({ message: 'There was an error finding user'})
    } else {
      res.status(200).send(result)
    }
  })
})