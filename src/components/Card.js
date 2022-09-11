export default function Card({img,price,name,description}){
    return(
        <div className="popular-card">
            <img className="popular-img" src={img}/>
            <div className="popular-details">
                <p className="house-price">${price}</p>
                <p className="house-name">{name}</p>
                <p className="house-description">{description}</p>
            </div>
            <button className="button view">View</button>
        </div>
    )
};