const films = [
    {name: "The Shining", released: 1979, genre: "Horror", rating: "18", stars: ["Jack Nicholson", "Shelley Duval"]},
    {name: "Alien", released: 1979, genre: "Scifi", rating: "18", stars: ["Sigourney Weaver", "John Hurt", "Ian Holm"]},
    {name: "The Princess Bride", released: 1987, genre: "Family", rating: "PG", stars: ["Cary Elwes", "Robin Wright", "Christopher Guest"]},
    {name: "This is Spinal Tap", released: 1981, genre: "Comedy", rating: "15", stars: ["Michael McKean", "Harry Shearer", "Christopher Guest"]},
    {name: "Airplane!", released: 1980, genre: "Comedy", rating: "A", stars: ["Robert Hays", "Julie Hegarty", "Leslie Nielsen"]},
    {name: "Unforgiven", released: 1992, genre: "Western", rating: "18", stars: ["Clint Eastwood", "Morgan Freeman", "Gene Hackman"]},
    {name: "Muppet Christmas Carol", released: 1992, genre: "Family", rating: "U", stars: ["Kermit the Frog", "Miss Piggy", "The Great Gonzo"]},
    {name: "The Truman Show", released: 1998, genre: "Scifi", rating: "PG", stars: ["Jim Carrey", "Laura Linney", "Ed Harris"]},
    {name: "The Prestige", released: 2006, genre: "Scifi", rating: "12A", stars: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]},
    {name: "Shaun of the Dead", released: 2004, genre: "Comedy", rating: "15", stars: ["Simon Pegg", "Kate Ashfield", "Nick Frost"]},
    {name: "Baby Driver", released: 2017, genre: "Thriller", rating: "15", stars: ["Ansel Elgort", "Lily James", "Kevin Spacey"]},
    {name: "Paddington 2", released: 2017, genre: "Family", rating: "PG", stars: ["Ben Wishaw", "Sally Hawkins", "Hugh Grant"]},
]
// Challenges
// select all films that are comedies

// const filmComedy=()=>{
//     let film=films.genre;
//     film.filter(ele=>{
//         if(film=="Comedy"){
//             console.log(film)
//             return film;
//         }
//     })
//     console.log(filmComedy);
//     return filmComedy;   
// }
// const filmComedy=(()=>{
// if (films.genre=="Comedy"){
//     return console.log(films.name) 
// }
// })
// select all films that are horror films

// the one which I was trying in right way

// const getFilmCom=(films)=>{
//     return films.filter(film=>{
//         if(film.genre=="Comedy"){
//             return film;
//         }
//     });
// }
// console.log(getFilmCom(films));

const comydy=films.filter((film)=>{
    return film.genre.includes("Comedy")
});
console.log(comydy);

const horror=films.filter((hor)=>{
    return hor.genre.includes("Horror")
});
console.log(horror);
// a simple function for selecting a film based on genre by Stu
const selectFilmGenre = (genre, film) => {
    if( film.genre === genre ) {
        return true;
    }
    return false;
}
// in one line
const comedyFils=films.filter(film=>selectFilmGenre("Comedy",film));
console.log(comedyFils);

// return an array of strings from the films, each string should contain the name of the film and the rating.

const filmTitles=films.map(film=>{
    return `${film.name}- ${film.rating}`;
}).sort();
console.log(filmTitles);

// try out:
// select all those films that star Christopher guest