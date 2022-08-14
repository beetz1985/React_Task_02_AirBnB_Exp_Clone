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
                    <span>({props.reviewCount}) • {props.country}</span>
                </p>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / per person</p>
            </section>
        </article>
    )
}

export default Card







//Object Destructuring for console test
//const object = {"Ben" : {id: 7, status: "online"}, "Dave" : {id:9, status: "online"}};
//const person = {name: "Ben", id: 7, status: "online"};