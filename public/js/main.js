async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();
  
    const movies = data.results;
    movies.forEach(movie => {
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview')
      
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container', 'bg-white', 'p-4', 'rounded', 'shadow','justify-between');
//Imagen
      const movieImg = document.createElement('img');
      movieImg.classList.add('w-1/3', 'h-32');
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,
      );

      const information= document.createElement('div');
      information.classList.add('mt-4');
//Titulo
      const titulo= document.createElement('h3');
      titulo.classList.add('text-lg', 'font-bold', 'text-center');
      titulo.innerText=movie.title;

//Popularidad
const popularity = document.createElement('h3');
popularity.classList.add('text-lg', 'font-bold', 'text-center');
popularity.innerText = movie.popularity;

//descripcion      
  //const description= document.createElement('p');
  //description.classList.add('text-black);
  //description.innerText=movie.overview;

      const description = document.createElement('p');
      description.classList.add('text-gray-600', 'mt-2');
      description.innerText = movie.overview;
      description.style.maxWidth = '19em'; //Limitar el ancho máximo de la descripción a 30 veces el tamaño de la fuente actual
      description.style.textAlign = 'justify';

//Idioma
  //const originalLanguage = document.createElement('h2');
  //originalLanguage.classList.add('text-gray-600', 'font-bold',);
  //originalLanguage.style.textTransform = 'uppercase'; // Convertir el texto a mayúsculas
  //originalLanguage.style.textAlign = 'left'; // Alinear el texto a la izquierda
  //originalLanguage.innerText = movie.original_language;

      const originalLanguage = document.createElement('h2');
      originalLanguage.classList.add('text-gray-600','text-lg', 'font-bold');
      originalLanguage.innerText = movie.original_language;
      originalLanguage.setAttribute('style', 'text-transform: uppercase; text-align: left;');

//Medio
      const mediatype = document.createElement('p');
      mediatype.classList.add('text-gray-600', 'font-bold');
      mediatype.innerText = movie.media_type;
      mediatype.setAttribute('style', 'font-size: smaller; text-transform: uppercase; text-align: left;');


//const genres = document.createElement('p');
//genres.classList.add('genres');
//genres.innerText = movie.genre_ids;

//Fecha
      const releaseDate = document.createElement('p');
      releaseDate.classList.add('text-gray-600');
      releaseDate.innerText = movie.release_date;
//Voto     
const voteCount = document.createElement('p');
voteCount.classList.add('text-gray-600', 'font-bold');
voteCount.innerText = movie.vote_count;
voteCount.setAttribute('style', 'font-size: smaller; text-transform: uppercase; text-align: left;');

      
  
      movieContainer.appendChild(movieImg);
      movieContainer.appendChild(information);
      information.appendChild(titulo);
      information.appendChild(originalLanguage)
      information.appendChild(mediatype)
      information.appendChild(releaseDate)
      information.appendChild(popularity)
      information.appendChild(description);
      information.appendChild(voteCount)
  
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
  }
  
  getTrendingMoviesPreview();