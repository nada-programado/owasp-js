// ✅ Right - Without Vulnerability
/*
The problem is that when you pass req.body, you have no control over how much data is coming from body. e.g.:
 -> username, password, email, isAdmin
*/
app.post('/generate-pwd-reset-url', async (req, res) => {
  const customer = await customerdb.findOne(req.body.email)

  const resetToken = await getPwdResetToken(customer._id)

  const resetPwdUrl = `${process.env.HOST_URL}/passwordReset?token=${resetToken}&id=${customer._id}`

  return res.json({resetPwdUrl: resetPwdUrl})
})