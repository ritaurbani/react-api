
function Card({ title, content, category, image, arrayTags, id, onDelete }) {

// const newTagArray = arrayTags.map((tag, index) => <span key={index}> {tag}</span>)

    const apiBase = "http://localhost:3000";

    return (
        <div className='card'>
            <div className='card-body'>
                <h4>{title}</h4>
                <p>{content}</p>
                {/* <p>{category}</p> */}
                <img src={`${apiBase}/${image}`} alt=""
                    className='w-75 p-3' />
                {/* <p>{newTagArray}</p> */}
                <div>
                    <button className='mx-2 btn btn-outline-success btn-sm'
                        onClick={onDelete}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Card