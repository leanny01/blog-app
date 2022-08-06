/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

 module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
  'GET /': 'home/index',
  'GET /example': 'example/index',
  'GET /articles': 'articles/index',
  'GET /articles/:id': 'articles/view-show',
  'GET /articles/new': 'articles/view-new-form',
  'POST /articles': 'articles/create-article',
  'GET /articles/:id/edit': 'articles/view-edit',
  'GET /articles/:id/delete': 'articles/delete-article',
  'POST /articles/:id/comment': 'articles/create-comment',

}
