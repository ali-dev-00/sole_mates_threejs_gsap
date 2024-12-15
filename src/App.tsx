import { About } from "./components/About"
import { BuyNow } from "./components/BuyNow"
import { CanvasContainer } from "./components/CanvasContainer"
import { Hero } from "./components/Hero"

function App() {
  return (
    <div className="">
      <div className="h-screen w-full fixed top-0 ">
      <CanvasContainer/>
      </div>
      <Hero/>
      <About/>
      <BuyNow/>
    </div>
  )
}
export default App
