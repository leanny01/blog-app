module.exports = {


  friendlyName: 'Create article',


  description: '',


  inputs: {
    title: {
      type: 'string',
      required: true,
    },
    body: {
      type: 'string',
      required: true,
    },
  },


  exits: {
    success:{
      responseType: 'redirect',
    },
  },


  fn: async function ({title, body}) {
    const newArticle = await Article.create({title, body}).fetch();
    // All done.
    return `/articles/${newArticle.id}`;
  }


};
