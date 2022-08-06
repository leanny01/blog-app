module.exports = {


  friendlyName: 'Create comment',


  description: '',


  inputs: {
    id: { // id of the article to be commented on
      type: 'string',
      required: true,
    },
    commenter: {
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


  fn: async function ({id, commenter, body}) {

    await Comment.create({article: id, commenter, body,}).fetch();

    // All done.
    return `/articles/${id}`;
  }
};
