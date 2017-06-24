import template from './emails.html';
import controller from './emails.controller';

let emailsComponent = {
	bindings: {},
	template,
	controller: ['$rootScope', '$interval', '$http', controller],
	controllerAs: '$ctrl'
};



export default emailsComponent;