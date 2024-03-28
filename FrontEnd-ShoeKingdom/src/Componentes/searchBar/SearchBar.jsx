import './SearchBar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductByName } from '../../../Redux/Actions/actions';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length) {
            dispatch(getProductByName(name))
            setName("")
        }
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <div>
                <input className='searchBox' type='text' placeholder='Buscar por nombre o marca' value={name} onChange={(event) => handleChange(event)} />
                <button className='searchButton' type='submit'>Buscar</button>
            </div>
        </form>
    )
}

export default SearchBar;