export default function Cases({title, code, description}){
    return(
    <>
        <div className="case">
            <h3>{title}</h3>
            <p className="code">{code}</p>
            <p className="description">{description}</p>

            <button>Read More</button>
        </div>
        
    </>
    )
}