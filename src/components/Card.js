import icon_star from "../assets/icons/Star 1.png"

function Card(props) {

    //console.log(props);

    let statusText;
    if(props.item.openSpots === 0) {
        statusText = "SOLD OUT";
    } else if(props.item.location === "Online") {
        statusText = "ONLINE";
    }

    return (
        <article className="card">
            <img src={props.item.coverImg} alt="swimmer"/>

            {/* <div className="card-status">{props.openSpots === 0 ? "SOLD OUT" : "OPEN" }</div> */}
            {/* {props.openSpots === 0 && <div className="card-status">SOLD OUT</div>} */}
            {statusText && <div className="card-status">{statusText}</div>}

            <section className="details">
                <p className="star-review">
                    <span><img src={icon_star} alt="star icon"/>&nbsp;{props.item.stats.rating}&nbsp;</span>
                    <span>({props.item.stats.reviewCount}) • {props.item.location}</span>
                </p>
                <p>{props.item.title}</p>
                <p className="price"><strong>From ${props.item.price}</strong> / per person</p>
            </section>
        </article>
    )
}

export default Card







//Object Destructuring for console test
//const object = {"Ben" : {id: 7, status: "online"}, "Dave" : {id:9, status: "online"}};
//const person = {name: "Ben", id: 7, status: "online"};