import { useState } from "react"
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-150 justify-center " style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center
          gap-3 px-3 bg-white py-2 rounded-3xl shadow-lg">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{backgroundColor: "red"}}>Red</button>
          <button
          onClick={() => setColor("Green")}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{backgroundColor: "green"}}>Green</button>
          <button
          onClick={() => setColor("Blue")}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{backgroundColor: "blue"}}>Blue</button>
          <button
          onClick={() => setColor("Olive")}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{backgroundColor: "Olive"}}>Olive</button>
          <button
          onClick={() => setColor("Grey")}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{backgroundColor: "grey"}}>Grey</button>
          <button
          onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-1 text-black shadow-lg rounded-full"
          style={{backgroundColor: "Yellow"}}>Yellow</button>
          <button
          onClick={() => setColor("Pink")}
          className="outline-none px-4 py-1 text-black shadow-lg rounded-full"
          style={{backgroundColor: "pink"}}>Pink</button>
          <button
          onClick={() => setColor("Purple")}
          className="outline-none px-4 py-1 text-black shadow-lg rounded-full"
          style={{backgroundColor: "purple"}}>Purple</button>
          <button
          onClick={() => setColor("Lavender")}
          className="outline-none px-4 py-1 text-black shadow-lg rounded-full"
          style={{backgroundColor: "lavender"}}>Lavender</button>
          <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 text-black-white shadow-lg rounded-full"
          style={{backgroundColor: "white"}}>White</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 text-white shadow-lg rounded-full"
          style={{backgroundColor: "Black"}}>Black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
