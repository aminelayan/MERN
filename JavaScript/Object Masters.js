const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
const oddNumberID = pokémon.filter( p=> p.id %3==0 );
console.log(oddNumberID);
//an array of pokémon objects that are "fire" type
const firetype = pokémon.filter( p=> p.types.includes("fire"));
console.log(firetype);
// an array of pokémon objects that have more than one type
const morethanonetype = pokémon.filter( p=> p.types.length>1);
console.log(morethanonetype);
// an array with just the names of the pokémon
const pokemonName = pokémon.map( p=> p.name);
console.log(pokemonName);
// an array with just the names of pokémon with an id greater than 99
const idgreaterthan99 = pokémon.filter( p=> p.id>99);
const pokemonNameid = idgreaterthan99.map( p=> p.name);
console.log(pokemonNameid);
// an array with just the names of the pokémon whose only type is poison
const poisontype = pokémon.filter(p=> p.types == "poison");
const poisonname=poisontype.map(s=>s.name);
console.log(poisonname);
// an array containing just the first type of all the pokémon whose second type is "flying"
const flyingtype = pokémon.filter(p=> p.types[1] == "flying");
const flyingname=flyingtype.map(s=>s.types[0]);
console.log(flyingname);
// a count of the number of pokémon that are "normal" type
const noramltype = pokémon.filter(p=> p.types.includes("normal")).length;
console.log(noramltype)
