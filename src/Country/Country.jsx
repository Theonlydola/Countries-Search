import './Country.css'
function Country({ item }) {

    return <li>
            <article className="card" key={item.callingCodes}>
                <div className="card-image">
                    <img src={item.flag} alt={item.name} />
                </div>
                <div className="card-content">
                    <h2 className="card-name">{item.name}</h2>
                    <ol className="card-list">
                        <li>
                            population:{" "}
                            <span>{item.population}</span>
                        </li>
                        <li>
                            Region: <span>{item.region}</span>
                        </li>
                        <li>
                            Capital: <span>{item.capital}</span>
                        </li>
                    </ol>
                </div>
            </article>
        </li>
}

export default Country;