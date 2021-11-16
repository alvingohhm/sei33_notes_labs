const chicken = {
  duck: function duck() {
    console.log(duck);
  },

  turkey: () => {
    console.log(this); //arrow function replace this with chicken. the this refer to the window outside of the chicken
  },

  swan() {
    console.log(this);
  },
};

chicken.duck();
chicken.turkey();
chicken.swan();
