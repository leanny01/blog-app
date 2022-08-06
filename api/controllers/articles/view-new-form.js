module.exports = {


  friendlyName: 'New view form',


  description: 'Renders a form to create a new article',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return sails.inertia.render('new-article-form',{name: 'New Article Form'});

  }


};
