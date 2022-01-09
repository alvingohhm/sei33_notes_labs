const pokeQuery = require("../models/pokeQuery");

const pokeControllers = {
  indexPageHandler: (req, res) => {
    const pokeList = pokeQuery.shortList();
    res.render("index.ejs", {
      PageTitle: "Pokedex Homepage",
      title: "Pokedex",
      pokeList,
    });
  },

  newPageHandler: (req, res) => {
    const monster = {
      name: "",
      img: "",
      type: [],
      stats: {
        hp: "",
        attack: "",
        defense: "",
        spattack: "",
        spdefense: "",
        speed: "",
      },
      sex: {
        male: "",
        female: "",
      },
      category: "",
      height: "",
      weight: "",
      abilities: {
        normal: [],
      },
    };
    res.render("new.ejs", {
      PageTitle: "Add Pokemon",
      title: "Add a Pokemon",
      monster,
    });
  },

  showPageHandler: (req, res) => {
    if (pokeQuery.isValidId(req.params.id)) {
      const monster = pokeQuery.findById(req.params.id);
      res.render("show.ejs", {
        PageTitle: "Pokedex Monster",
        title: `Pokedex - ${monster.name} - #${monster.id}`,
        monster,
      });
    } else {
      res.send("Status 404 - cannot find pokemon");
    }
  },

  editPageHandler: (req, res) => {
    if (pokeQuery.isValidId(req.params.id)) {
      const monster = pokeQuery.findById(req.params.id);
      res.render("edit.ejs", {
        PageTitle: "Edit Pokemon",
        title: `Edit - ${monster.name} - #${monster.id}`,
        monster,
      });
    } else {
      res.send("Status 404 - cannot find pokemon");
    }
  },

  createNewPokemonHandler: (req, res) => {
    const getType = req.body.type.split(",").map((item) => item.trim());

    const monster = {
      name: req.body.name,
      img: req.body.img,
      type: getType,
      stats: {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed,
      },
      sex: {
        male: req.body.male,
        female: req.body.female,
      },
      category: req.body.category,
      height: req.body.height,
      weight: req.body.weight,
      abilities: {
        normal: [req.body.abilities],
        hidden: [],
      },
    };

    const getId = pokeQuery.addList(monster);
    if (getId !== "" || getId !== null) {
      res.redirect(`/pokemon/${getId}`);
    } else {
      res.send("Status 404 - cannot find pokemon");
    }
  },

  updatePokemonHandler: (req, res) => {
    if (pokeQuery.isValidId(req.params.id)) {
      const getType = req.body.type.split(",").map((item) => item.trim());
      const monster = {
        name: req.body.name,
        img: req.body.img,
        type: getType,
        stats: {
          hp: req.body.hp,
          attack: req.body.attack,
          defense: req.body.defense,
          spattack: req.body.spattack,
          spdefense: req.body.spdefense,
          speed: req.body.speed,
        },
        sex: {
          male: req.body.male,
          female: req.body.female,
        },
        category: req.body.category,
        height: req.body.height,
        weight: req.body.weight,
        abilities: {
          normal: [req.body.abilities],
          hidden: [],
        },
      };

      const getId = pokeQuery.updateMonster(req.params.id, monster);
      if (getId !== "" || getId !== null) {
        res.redirect(`/pokemon/${getId}`);
      }
    } else {
      res.send("Status 404 - cannot find pokemon");
    }
  },

  deletePokemonHandler: (req, res) => {
    if (pokeQuery.isValidId(req.params.id)) {
      const deletedMonster = pokeQuery.deleteMonster(req.params.id);
      if (deletedMonster === null) {
        res.send("Status 404 - delete operation failed");
      } else {
        res.redirect("/pokemon");
      }
    } else {
      res.send("Status 404 - cannot find pokemon");
    }
  },
};

module.exports = pokeControllers;
