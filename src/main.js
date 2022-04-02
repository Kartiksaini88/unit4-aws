let express = require("express")
const { default: mongoose } = require("mongoose")
let cors = require("cors")
let app = express()
app.use(cors())

app.use(express.json())


let connect = require("./configs/db")


let MenRouter = require("./controller/mencont")
let WomenRouter = require("./controller/womencont")
let kidRouter = require("./controller/kidscont")
let homestopRouter = require("./controller/homestopcont")
let GiftRouter = require("./controller/giftcont")
let beautyRouter = require("./controller/beautycont")
let luxeRouter = require("./controller/luxecont")
let watchrouter = require("./controller/watchcont")
let BrandRouter = require("./controller/brandcont")


app.use("/kids",kidRouter) 
app.use("/mens",MenRouter)
app.use("/womens",WomenRouter)
app.use("/homestop",homestopRouter)
app.use("/gift",GiftRouter)
app.use("/beauty",beautyRouter)
app.use("/luxe",luxeRouter)
app.use("/watch",watchrouter)
app.use("/brand",BrandRouter)


app.listen(3000,async()=>{
      try {
          await connect()
          console.log("This is port 3000 yo")
      } catch (error) {
          console.log(error)
      }
})