import { useState } from "react";
import axios from 'axios';

function Search({addSearched}) {
    const [title, setTitle] = useState('');

    const search = async (e) => {
        e.preventDefault();

        const url = process.env.REACT_APP_API_URL + `&t=${title}`;

        try {
            const response = await axios.get(url);
            const data = response.data;
            if (data.Title) {
                addSearched(data);
            } else {
                alert(`No movie named ${title} found!`)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="searchCtn">
            <p>Find Your Favorite Movie</p>
            <form onSubmit={search}>
                <input
                    type="text"
                    name="query"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a movie title"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;