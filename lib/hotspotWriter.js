const fs = require('fs'); 

// hotspots in JSON file for simplicity, store in a db for production applications
let products = require('data/hotspot.json');

export const hotspotRepo = {
  getAll: () => hotspots,
  getById: id => hotspots.find(x => x.id.toString() === id.toString()),
  find: x => hotspots.find(x),
  create,
  // update,
  // delete: _delete
};

function create(hotspot) {
  // generate new user id
  let hotspotData = {
    id: hotspots.length ? Math.max(...hotspots.map(x => x.id)) + 1 : 1, 
    dateCreated: new Date().toISOString(), 
    dateUpdated: new Date().toISOString(),
  }

  const data = {
    ...hotspotData,
    ...hotspot, 
  }
  
  // add and save user
  hotspots.push(data);
  saveData();
}

function saveData() {
  fs.writeFileSync('data/hotspot.json', JSON.stringify(hotspots, null, 4));
} 