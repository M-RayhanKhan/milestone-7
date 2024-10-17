import './StyleBook.css'

export default function Books({book}){
    const {name, price} = book
    return(
        <div className='books'>
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
        </div>
    )
}