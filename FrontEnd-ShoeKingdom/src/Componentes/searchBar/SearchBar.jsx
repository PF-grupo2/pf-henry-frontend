import './SearchBar.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductByName } from '../../../Redux/Actions/actions';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate= useNavigate()
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    //useEffect(handleSubmit, [name.length])
    const handleSubmit = (event) => {
        event.preventDefault();
        //if (name.length) {
            dispatch(getProductByName(name))
            setName("")
            navigate('/product')
       // }
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <div>
                <input className='searchBox ' type='text' placeholder='Nombre o Marca' value={name} onChange={(event) => handleChange(event)} />
                <button className='searchButton ' type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </form>
    )
}

export default SearchBar;