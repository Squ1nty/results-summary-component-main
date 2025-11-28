import '../css/App.css'
import '../css/index.css'
import Footer from './Footer'
import Component from './Component'

function App() {
  return (
    <div className="grid h-svh w-full bg-[var(--pale-blue)]">
      <Component />
      <Footer />
    </div>
  )
}

export default App
