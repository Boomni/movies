import { useState } from "react";
import axios from 'axios';

function Search(props) {
    const [title, setTitle] = useState('');

    const search = async (e) => {
        e.preventDefault();

        const url = process.env.REACT_APP_API_URL + `&t=${title}`;

        try {
            const response = await axios.get(url);
            const data = response.data;
            props.addSearched(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={search}>
                <label htmlFor="query">Movie Title</label>
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