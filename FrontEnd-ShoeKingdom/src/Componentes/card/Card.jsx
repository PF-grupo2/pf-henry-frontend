import DATA from '../../Data'
import {NavLink} from 'react-router-dom'

const cardItem = (item) =>{
    
    return (
            <div class="card my-3 py-2" key={item.id} style={{ width: "18rem" }}>
                <img src={item.images[0]} class="card-img-top" alt={item.name} />
                <div class="card-body text-center">
                    <h5 class="card-title">{item.name}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink to={`/product/${item.id}`} class="btn btn-outline-primary">Comprar ahora</NavLink>
                </div>
            </div>
        );
  
}

export default cardItem