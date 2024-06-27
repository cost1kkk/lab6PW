import { useState } from "react";
import MovieListTrending from "./MovieListTrending";

const Trending = () => {

    const [trendings, setTrending] = useState([
        {title: 'Interstellar', description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.', director: 'Christopher Nolan', image: '/images/interstelar.jpg', id: 1 },
            {title: 'Django Unchained', description: 'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.', director: 'Quentin Tarantino', image: '/images/django.jpg', id: 2 },
            {title: 'Joker', description: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.', director: 'Todd Phillips', image: '/images/joker.jpg', id: 3 },
            {title: 'Oppenheimer', description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.', director: 'Christopher Nolan', image: '/images/openh.jpg', id: 4 }
    ])

    return ( 
        
          <MovieListTrending trendings={trendings} title="Trending now"/>
        
              
            
     );
}
 
export default Trending;