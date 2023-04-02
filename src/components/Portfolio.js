import { useEffect, useState } from "react";

const Portfolio = () => {
    const [repos, setRepos] = useState([]);

    const getRepos = async () => {
        const response = await fetch(`https://api.github.com/users/SideWayGoat/repos`);
        const data = await response.json();
        setTimeout (() => setRepos(data), 500);
        // console.log(data);
    };

    useEffect(() => {
        getRepos();
    }, []);

    return (
        <div className="repos">
        <h3>My Public Repositories:</h3>
        {repos.length > 0 ? (
            <ul>
            {repos.map((repo) => {
                const { id, name, description, html_url } = repo;
                return (
                <li key={id}>
                    <a href={html_url} target="_blank">Repo name: {name}</a>
                    <p>Description: {description}</p>
                </li>
                );
            })}
        </ul>
        ) : (
        <p>Loading repositories...</p>
        )}
    </div>
    );
};

export default Portfolio;
