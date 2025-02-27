import dotenv from "dotenv"

export const DOTENV_PATH = dotenv.config({
    path:"./.env"
})

export const DB_URI="mongodb+srv://alokeshmaitra9:BRceba8GQUeBIK3O@cluster0.nfd2pqa.mongodb.net"
export const DB_NAME="stockpulse"
export const PORT=3000