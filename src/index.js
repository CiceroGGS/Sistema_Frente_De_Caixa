const app = require("./servidor");

app.listen(process.env.PORT || 3000, () => console.log('Servidor Online'));