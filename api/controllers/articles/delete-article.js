module.exports = {


  friendlyName: 'Delete article',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
  },


  exits: {
    success: {
      responseType: 'redirect',
    },
  },


  fn: async function ({id}) {

    await Article.destroyOne({id: id});

    // All done.
    return '/articles';

  }


};
