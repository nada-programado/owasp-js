// ❌ Wrong - With Vulnerability
app.post('/generate-pwd-reset-url', async (req, res) => {
  const customer = await customerdb.findOne(req.body.email)

  const resetToken = await getPwdResetToken(customer._id)

  const resetPwdUrl = `${req.header('host')}/passwordReset?token=${resetToken}&id=${customer._id}`

  return res.json({resetPwdUrl: resetPwdUrl})
})