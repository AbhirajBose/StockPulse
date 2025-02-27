import cookieParser from 'cookie-parser'
import express from 'express'   
import cors from 'cors';

const app = express()

app.use(
    cors({
      origin: "http://localhost:5173", // Allow frontend origin
      credentials: true, // Allow cookies & authentication headers
    })
  );


app.use(express.json())
app.use(express.urlencoded({
    limit:"16kb",    
    extended:true
}))
app.use(express.static("public"))
app.use(cookieParser())

// console.log(process.env.CLOUDINARY_API_KEY);
//router import 

// import userRouter from "./routes/user.route.js"

//router decleration

// app.use("/api/v1/users", userRouter)
app.get('/', (req, res) => {
    res.send('Hello World!');
  })

  import userRouter from "./routes/user.routes.js"

  app.use("/api/v1/users", userRouter)


export { app }