class emailcontrolController {
	// constructor is used for setting default variables
	constructor($rootScope, $interval, $http) {
		let ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.$rootScope.moreEmails = false;
		
	}; //constructor

	refresh() {
		let ctrl = this;
		let moreEmails = ctrl.$rootScope.moreEmails;
		ctrl.moreEmails = !ctrl.moreEmails;
		ctrl.$rootScope.moreEmails = ctrl.moreEmails;

	}	

	delete() {
		console.log('delete');
	}

	nextRight() {
		console.log('next email RIGHT');
	}

	nextLeft() {
		console.log('next email LEFT');
	} 

} // emailcontrolController
export default emailcontrolController;
