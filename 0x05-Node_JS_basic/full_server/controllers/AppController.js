/**
 * Contains the miscellaneous route handlers.
 * @author kelvin mutugi <https://github.com/kelvintechsolutions>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
