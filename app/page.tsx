import Navbar from "./components/Navbar"
import Browsebutton from "./components/Browsebutton"


export default function Home () {
  return (
  <>
  <Navbar/>
  <main className="min-h-screen flex flex-col items-center justify-center bg-amber-100/50">
    <h1 className="text-5xl font-bold text-center">Find a place you'll love to call home</h1>
    <p className="mt-4 mb-4 text-gray-600 text-center">Discover verified off-campus accommodation around NSUK</p>
    < Browsebutton/>
  </main>
  </>)
}


