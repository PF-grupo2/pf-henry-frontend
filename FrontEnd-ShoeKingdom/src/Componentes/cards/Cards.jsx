import Card from "../card/Card"
import './Cards.css';
const Cards = ({allZapatillas}) =>{
    return(
        <>
          {/* <h1>todas las tarjetas</h1> */}
          {allZapatillas ? (
        <div className="card-list  ">
            {allZapatillas.map((zapatilla) =><Card key={zapatilla.id} zapatilla={zapatilla}  /> )   }
        </div>

          ): (
            <span>no hay nada</span>
          )}
        </>
       
    )
  
}

export default Cards


