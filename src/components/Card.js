//import image_12 from "../assets/hero_imgs/image12.png"
import icon_star from "../assets/icons/Star 1.png"

function Card(props) {

    return (
        <article className="card">
            <img src={props.img} alt="swimmer"/>
            <div className="card-status">SOLD OUT</div>
            <section className="details">
                <p className="star-review">
                    <span><img src={icon_star} alt="star icon"/>&nbsp;{props.rating}&nbsp;</span>
                    <span>(6) • USA</span>
                </p>
                <p>Life lessons with {props.name}</p>
                <p><strong>From {props.price}</strong> / per person</p>
            </section>
        </article>
    )
}

export default Card