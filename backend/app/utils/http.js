module.exports = {

	/**
 	* Handles not defined http verbs to valid REST paths
	 */
    notAllowedHandler:function(req, res, next) {

	  res.status(405).send();

	}
}