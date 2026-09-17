import { Link } from "react-router-dom";

function Hero() {
    return(<section className="hero">
        <div className="hero-content">
            <h1 className="hero-luke">LUKE'S</h1>
            <h1>VIDEO GAME</h1>
            <h1 className="hero-luke">COLLECTION</h1>

            <h3>Track, organize, and discover great games.</h3>
            <p>
                Browse my personal video games, view ratings, and submit recommendations through a custom
                full-stack MERN application featuring an admin approval workflow.
                Have a recommendation? Submit a game suggestion and I'll review it for future additions to the collection.
            </p>

            <div className="hero-buttons">
                <Link to="/collection">Browse Collection</Link>
                <Link to="/suggestion">Suggest Videogame</Link>
            </div>
        </div>
        <div className="hero-image">
            <img src="/HeroController.png" alt="gaming"/>
        </div>
    </section>)
}

export default Hero;