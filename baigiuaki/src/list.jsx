import './list.css'

const List=(prop) =>{
    return (
        <div className="list">
            <img src={prop.propImg} />
            <p>{prop.propEx}</p>
            <h3>{prop.propName}</h3>
        </div>
    )
}
export default List;
