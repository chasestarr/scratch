import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
<html>
  <body>
    <div id="root">hello world</div>
  </body>
</html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
