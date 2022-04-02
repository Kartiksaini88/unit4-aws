let express = require("express")
const { default: mongoose } = require("mongoose")
let cors = require("cors")
let app = express()
app.use(cors())

app.use(express.json())


let connect = require("./src/configs/db")


let MenRouter = require("./src/controller/mencont")
let WomenRouter = require("./src/controller/womencont")
let kidRouter = require("./src/controller/kidscont")
let homestopRouter = require("./src/controller/homestopcont")
let GiftRouter = require("./src/controller/giftcont")
let beautyRouter = require("./src/controller/beautycont")
let luxeRouter = require("./src/controller/luxecont")
let watchrouter = require("./src/controller/watchcont")
let BrandRouter = require("./src/controller/brandcont")


app.use("/kids",kidRouter) 
app.use("/mens",MenRouter)
app.use("/womens",WomenRouter)
app.use("/homestop",homestopRouter)
app.use("/gift",GiftRouter)
app.use("/beauty",beautyRouter)
app.use("/luxe",luxeRouter)
app.use("/watch",watchrouter)
app.use("/brand",BrandRouter)


app.listen(5000,async()=>{
      try {
          await connect()
          console.log("This is port 5000")
      } catch (error) {
          console.log(error)
      }
})