export default function Review({img,author,content}){
    return(
        <div className="review-card">
            <img className="author-img" src={img}/>
            <p className="author">{author}</p>
            <p className="content">{content}</p>
        </div>
    )
};