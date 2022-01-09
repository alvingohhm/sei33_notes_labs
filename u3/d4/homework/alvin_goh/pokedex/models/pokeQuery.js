const pokemon = require("./pokemon");
const jsonQuery = require("json-query");

const pokeQuery = {
  fullList: [],
  availableId: [],
  init: () => {
    pokeQuery.fullList = pokemon.map((monster) => {
      const { id, name, img, type, stats, misc } = monster;
      const { sex, classification, height, weight, abilities } = misc;
      let category = classification.split(" ")[0];
      category = category.charAt(0).toUpperCase() + category.slice(1);
      const profile = {
        id,
        name,
        img,
        type,
        stats,
        sex,
        category,
        height,
        weight,
        abilities,
      };
      return profile;
    });
  },
  shortList: () => {
    return pokeQuery.fullList.map((monster) => {
      const { id, name, img, type } = monster;
      return { id, name, img, type };
    });
  },

  findById: (id) => {
    const monster = jsonQuery(`[id=${id}]`, {
      data: pokeQuery.fullList,
    }).value;
    return monster;
  },

  getIndex: (targetId) => {
    return pokeQuery.fullList.findIndex(({ id }) => id === targetId);
  },

  generateId: () => {
    if (pokeQuery.availableId.length > 0) {
      return pokeQuery.availableId[pokeQuery.availableId.length - 1];
    } else {
      let id = Number(pokeQuery.fullList[pokeQuery.fullList.length - 1].id) + 1;
      if (id < 10) {
        return `00${id}`;
      } else if (id < 100) {
        return `0${id}`;
      } else {
        return "" + id;
      }
    }
  },

  addList: (monster) => {
    const getId = pokeQuery.generateId();
    monster.id = getId;
    pokeQuery.fullList.push(monster);
    pokeQuery.availableId.pop();
    return getId;
  },

  isValidId: (targetId) => {
    const monster = pokeQuery.findById(targetId);
    if (monster === null) {
      return false;
    } else if (monster.id === targetId) {
      return true;
    }
  },

  updateMonster: (targetId, monster_edited) => {
    const monster = pokeQuery.findById(targetId);
    const index = pokeQuery.getIndex(targetId);
    pokeQuery.fullList[index] = {
      ...monster,
      ...monster_edited,
    };
    return pokeQuery.fullList[index].id;
  },

  deleteMonster: (targetId) => {
    const index = pokeQuery.getIndex(targetId);
    const deletedMonster = pokeQuery.fullList.splice(index, 1);
    if (deletedMonster !== null) {
      pokeQuery.availableId.push(deletedMonster[0].id);
    }
    return deletedMonster;
  },
};

pokeQuery.init();

module.exports = pokeQuery;
