// ❌ Wrong - With Vulnerability
app.get("/api/data", async (req, res) => {
  const url = req.query.url

  try {
    const response = await fetch(url)
    const data = await response.json()


    res.status(200).json({ data: data })
  } catch (error) {
    console.log(err)
    res.status(500).json({ err: err.msg })
  }
})