import Header from "./components/Header"
import Hero from "./components/Hero"
import HeroText from "./components/Hero-txt"
import Card from "./components/Card"
import data from "./Data/data"





function App() {

    const cardComponents = data.map(v=><Card key={v.id} item={v}/>);

    return (
        <div className="wrapper">
            <Header />
            <main className="main-content">
                <Hero />
                <HeroText />
                <section className="cards">
                    <div className="cards-inner">
                        {cardComponents}     
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
