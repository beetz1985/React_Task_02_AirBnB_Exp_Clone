import Header from "./components/Header"
//import Hero from "./components/Hero"
//import HeroText from "./components/Hero-txt"
import Card from "./components/Card"

import image12 from "./assets/hero_imgs/image12.png"

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main className="main-content">
                {/* <Hero /> */}
                {/* <HeroText /> */}
                <Card 
                    img={image12}
                    rating="5.0"
                    reviewCount={6}
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136}
                />
            </main>
        </div>
    )
}

export default App