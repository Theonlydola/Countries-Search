import { useEffect, useState } from "react"
import './Search.css'
function Search({ items, setFilteredItems }) {

    const [q, setQ] = useState('');
    const [searchParam] = useState(["capital", "name", "region"]);

    useEffect(() => {
        if (q !== '')
            setFilteredItems(
                items.filter((item) => {
                    return searchParam.some((newItem) => {
                        return item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) > -1;
                    });
                })
            )
        else
            setFilteredItems(items);
    }, [q, items, searchParam])

    return <div className="search-wrapper">
        <label htmlFor="search-form">
            <input
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search for..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Search countries here</span>
        </label>
    </div>
}

export default Search;