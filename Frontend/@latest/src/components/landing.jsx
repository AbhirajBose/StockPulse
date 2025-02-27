import Login from "../pages/login";
import NavBar from "./navbar";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <NavBar />
      <div className="gap-10 flex justify-center items-center h-[90vh]">
        <div  className="graph  flex flex-col gap-10 justify-center items-center rounded-lg w-[35vw] h-[70vh]">
          <div className="flex flex-row gap-5 items-center">
            <img src="./src/assets/image 2.png"/>
            <h1>AMZN</h1>
            <h1>214.85^</h1>
            <h1>1.09%(2.21)</h1>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <img src="./src/assets/image 4.png"/>
            <h1>MSFT</h1>
            <h1>399.9</h1>
            <h1>1.01%</h1>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <img src="./src/assets/image 3.png"/>
            <h1>AAPL</h1>
            <h1>214.845</h1>
            <h1>1.09%</h1>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <img src="./src/assets/image 5.png"/>
            <h1>GBP</h1>
            <h1>214.845</h1>
            <h1>1.09%</h1>
          </div>
        </div>
        <div className="adver flex gap-5 flex-col justify-center items-center ">
          <h2 className="text-5xl font-semibold w-[40vw] text-center">
            LEARN AND GROW with{" "}
            <span className="text-yellow-600">StockPulse</span>
          </h2>
          <p className="text-2xl para w-[40vw] text-center">
            An engaging platform to learn stock market trends and invest
            accurately
          </p>
          <button className="btn  w-[20vw] h-[15vh] text-2xl">Explore now</button>
        </div>
      </div>
    </>
  );
}
export default Landing;