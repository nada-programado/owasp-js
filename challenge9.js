// ❌ Wrong - With Vulnerability
app.post('signup', (req, res) => {
  db.users.find({
    "username": req.body.username
  }, async (err, result) => {
    if (err) {
      return res.status(500).json({ msg: 'Error '})
    } else if (result.length === 0) {
      await db.users.insert(req.body)
      return res.status(201)
    } else {
      return res.status(409)
    }
  })
})