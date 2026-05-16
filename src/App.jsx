import AppRoutes from "./Routes/AppRoutes"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#F0F5FF] font-sans">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
