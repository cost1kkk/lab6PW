import {useState} from 'react';
import MovieListBest from './MovieListBest';



const Best = () => {

    const [movies, setMovies] = useState([
        { title: 'The Gentlemen', body: 'An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.', image1: '/images/gentleman.jpg' ,director: 'Guy Ritchie', id: 1 },
        { title: 'Inglourious Basterds', body: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owners vengeful plans for the same.', director: 'Quentin Tarantino', image1: '/images/basterd.jpg' ,id: 2 },
        { title: 'The Dark Knight', body: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', director: 'Christopher Nolan', image1: '/images/batman.jpg', id: 3 },
        { title: 'Inception', body: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', director: 'Christopher Nolan', image1: '/images/inception.jpg', id: 4 },
      

    ]); 

    

    return ( 
        
          
          <MovieListBest movies={movies} title="Best you could see"/>
                    
  );      
}
 
export default Best;