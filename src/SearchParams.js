import React, {useState} from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal]= useState("Dog");
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal" 
                        value={animal} 
                        onBlur={e => setAnimal(e.target.value)} 
                        onChange={e => setAnimal(e.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => <option key={animal} value={animal}>{animal}</option>)}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;