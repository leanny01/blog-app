module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',

  inputs: {
    id: {
      type: 'string',
      required: true,
    }
  },

  exits: {

    success:{
      responseType: 'redirect',
    },
    notFound  : {
      description: 'No article with the specified ID was found in the database.',
      responseType: 'notFound'
    }

  },


  fn: async function ({id}) {

    const articleTobeUpdated = await Article.findOne(id);

    if(!articleTobeUpdated){ throw 'notFound';}

    // Respond with view.
    return sails.inertia.render('edit-article-form',{name: 'edit article', articleTobeUpdated});

  }


};
