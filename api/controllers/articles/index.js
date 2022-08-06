module.exports = {


  friendlyName: 'Index',


  description: 'Index articles.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    const recentArticles = await Article.find().sort('createdAt DESC').limit(10).populate('comment');
    return sails.inertia.render('articles', {
      name: 'Articles',
      recentArticles
    });

  }


};


