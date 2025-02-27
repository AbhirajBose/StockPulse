import dotenv from "dotenv"

export const DOTENV_PATH = dotenv.config({
    path:"./.env"
})

export const DB_URI="mongodb+srv://alokeshmaitra9:BRceba8GQUeBIK3O@cluster0.nfd2pqa.mongodb.net"
export const DB_NAME="stockpulse"
export const PORT=3000
export const ACCESS_TOKEN_SECRET ="93b9880a2781f3e3c933af09f92c0826bd5858d99d267c77348c68f351e4e6fb9a4982d4c39690f21aedfdd4cd4779079c9dd0a48fcb0cee475443ae604813fb"
export const ACCESS_TOKEN_EXPIRY ="1d"
export const REFRESH_TOKEN_SECRET ="bfbfb0d263e8f1bebbf46f7a417bb9fd4da4db40e9cc3c216a4bc84ecb5bc38f39e51dd228541a1e7040dc0c9fd2b363051281af8898b5108291a222cded5ba5"
export const REFRESH_TOKEN_EXPIRY ="7d"
