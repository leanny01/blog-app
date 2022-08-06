module.exports = {


  friendlyName: 'Show',


  description: 'Show articles.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    }
  },


  exits: {
    notFound  : {
      description: 'No article with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },


  fn: async function ({id}) {

    const singleArticle = await Article.findOne(id).populate('comment');

    if(!singleArticle){ throw 'notFound';}
    // All done.
    return sails.inertia.render('article', {
      name: 'Article',
      singleArticle
    });

  }


};





