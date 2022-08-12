import Header from "./components/Header"
import Hero from "./components/Hero"
import HeroText from "./components/Hero-txt"

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main className="main-content">
                <Hero />
                <HeroText />
            </main>
        </div>
    )
}

export default App