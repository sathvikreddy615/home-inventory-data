const HomeInventoryDB = {};

HomeInventoryDB.furniture = [];
HomeInventoryDB.crafts = [];
HomeInventoryDB.electronics = [];

// crafts

const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }

const painting = {
    name: "Beatles Painting",
    location: "Bathroom",
    description: "Painting of the Beatles"
}

// furniture

const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

const couch = {
    name: "Leather Couch",
    location: "Living Room",
    description: "Leather couch in living room"
}

const bed = {
    name: "Nice Bed",
    location: "Bedroom",
    description: "Very comfy bed"
}

const coffeeTable = {
    name: "Marble Coffe Table",
    location: "Living Room",
    description: "Beautiful coffee table"
}

// electronics

const television = {
    name: "LG 4K Television",
    location: "Living Room",
    description: "This is television is the most advanced of its kind and provides crystal clear visuals."
}

const videoGame = {
    name: "Xbox One X",
    location: "Living Room",
    description: "One of three advanced video games consoles in the world"
}

const microwave = {
    name: "Fancy Microwave",
    location: "Kitchen",
    description: "Microwave located in kitchen"
}

const speakers = {
    name: "Bose Speaker",
    location: "Living Room",
    description: "High quality speaker with nice bass"
}

// Assignments

HomeInventoryDB.crafts.push(vintageInkwell);
HomeInventoryDB.crafts.push(painting);
HomeInventoryDB.furniture.push(writingDesk);
HomeInventoryDB.furniture.push(couch);
HomeInventoryDB.furniture.push(bed);
HomeInventoryDB.furniture.push(coffeeTable);
HomeInventoryDB.electronics.push(television);
HomeInventoryDB.electronics.push(videoGame);
HomeInventoryDB.electronics.push(microwave);
HomeInventoryDB.electronics.push(speakers);

const saveDB = (dbObject, localStorageKey) => {
    const stringifiedDB = JSON.stringify(dbObject);
    localStorage.setItem(localStorageKey, stringifiedDB);
}

saveDB(HomeInventoryDB, "HomeInventory");

const loadDB = localStorageKey => {
    const dbString = localStorage.getItem(localStorageKey);
    return JSON.parse(dbString);
}

console.log(loadDB("HomeInventory"));