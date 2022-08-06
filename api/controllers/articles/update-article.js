module.exports = {
  friendlyName: 'Update article',

  description: '',

  inputs: {
    id: {
      type: 'string',
      required: true,
    },
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
    success: {
      responseType: 'redirect',
    },
  },

  fn: async function ({id, title, body}) {

    const updatedArticle = await Article.updateOne({id: id}).set({title: title, body: body});
    // All done.
    return '/articles/' + updatedArticle.id +'/edit';
  },
};
