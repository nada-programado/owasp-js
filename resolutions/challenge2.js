// ✅ Right - Without Vulnerability
/* 
The problem here is that if the user wants to fetch a different url, passing a parameter in the URL. e.g.:

https://internal.myapp.com/data?url=https://internal.myapp.com/data/countries.json
https://internal.myapp.com/data?url=https://internal.myapp.com/data/states.json
https://internal.myapp.com/data?url=https://internal.myapp.com/data/secrets.json

*/

app.get("/api/data", async (req, res) => {
  const url = req.query.url
  const allowURLs = ["https://internal.myapp.com/data/countries.json", "https://internal.myapp.com/data/states.json"]

  try {
    if (!allowURLs.includes(url)) {
      return res.status(400).json({ error: "Bad URL"})
    }

    const response = await fetch(url)
    const data = await response.json()


    res.status(200).json({ data: data })
  } catch (error) {
    console.log(err)
    res.status(500).json({ err: err.msg })
  }
})