import template from './emails.html';
import controller from './emails.controller';

let emailsComponent = {
	bindings: {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl'
};



export default emailsComponent;