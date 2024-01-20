import { useEffect, useState } from 'react';

export default function App() {
  const [ repositorios, setRepositorios ] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Jose-Nonato/repos')
    .then(response => response.json())
    .then(data => setRepositorios(data))
  }, [])

  return (
    <div>
      <ul>
        { repositorios.map(repositorio => {
          return(
            <li>
              <h3>{repositorio.name}</h3>
              <p>{repositorio.description}</p>
              <a href={repositorio.html_url} target='_blank'>Saiba mais +</a>
            </li>
          )
        }) }
      </ul>
    </div>
  );
}
