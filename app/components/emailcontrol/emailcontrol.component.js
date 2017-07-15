import template from './emailcontrol.html';
import controller from './emailcontrol.controller';

let emailcontrolComponent = {
	bindings: {},
	template,
	controller: ['$rootScope', '$interval', '$http', controller],
	controllerAs: '$ctrl'
};



export default emailcontrolComponent;