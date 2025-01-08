
function Card({ title, content, category, image, tags, id, onDelete }) {


    const apiBase = "http://localhost:3000";

    return (
        <div className='card'>
            <div className='card-body'>
                <h4>{title}</h4>
                <p>{content}</p>
                {/* <p>{category}</p> */}
                <img src={`${apiBase}/${image}`} alt=""
                    className='w-75 p-3' />
                    <div>
                        {tags.map((tag,index)=> (
                        <span key={index}>{tag}</span>
                        ))}
                    </div>
                <div>
                    <button className='mx-2 btn btn-outline-success btn-sm'
                        onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card