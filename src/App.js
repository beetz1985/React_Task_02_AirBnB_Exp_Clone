import Header from "./components/Header"
//import Hero from "./components/Hero"
//import HeroText from "./components/Hero-txt"
import Card from "./components/Card"

import image12 from "./assets/hero_imgs/image12.png"
import image11 from "./assets/hero_imgs/image11.png"

function App() {
    return (
        <div className="wrapper">
            <Header />
            <main className="main-content">
                {/* <Hero /> */}
                {/* <HeroText /> */}
                <Card 
                    img={image12}
                    name="Ben Toulson"
                    rating="5"
                    price="$199"
                />
                <Card 
                    img={image11}
                    name="Dave Elisson"
                    rating="1"
                    price="$9"               
                />
            </main>
        </div>
    )
}

export default App