for(let i=1;i<=10;i++){
    if(i==5){
        continue;
        // skips 5
        // if used break then it prints only till 4
    }
    console.log(i)
}

// arrays

const coaches=["sam","josie","stu"];
coaches.push("dan");
coaches.unshift("andy");

coaches.pop();
for(let i=0;i<coaches.length;i++){
    console.log(coaches[i])
}

const grid=[[1,2,3],[4,5,6],[7,8,9]]
    console.table(grid)
    console.log(grid[0][1])
    // prints 2
    console.log(grid[1][0])
    // prints 4

// array iterators

const nums=[1,2,3,4,5,6];

nums.forEach((num)=>{
    console.log(num)

})

grid.forEach((numArr)=>{
    console.log(numArr);
    numArr.forEach((n)=>{
        console.log(n);
    })
})
// map creates a new array and transforms the new array
const times10= nums.map(num=>{
    return num*10;
})
console.log(times10);

// filters
const odds=nums.filter((num)=>{
    return num%2==1;
})
console.log(odds);

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

const firstFilm=films[0];
console.log(`Name: ${firstFilm.name}, Rating: ${firstFilm.rating}`)

// returns true if film is in that genre, otherwise false
const filterGenre=(genre,filmObj)=>{
    return filmObj.genre.toUpperCase()==genre.toUpperCase();
}
const comedyFilms=films.filter((film)=>{
    return filterGenre("Comedy", film)
}).map(filmObject=>{
    return `${filmObject.name} - ${filmObject.rating}`;
})
console.log(comedyFilms);