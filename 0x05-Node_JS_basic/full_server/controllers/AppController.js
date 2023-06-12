/**
 * Contains the miscellaneous route handlers.
 * @author Denis wachira <https://github.com/deniswachira>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
