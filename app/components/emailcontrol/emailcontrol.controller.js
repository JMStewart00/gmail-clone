class emailcontrolController {
	// constructor is used for setting default variables
	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.title = "You've Got Stew Mail";
	}; //constructor

	refresh() {
		console.log('refresh');
	}	

	delete() {
		console.log('delete');
	}

	selectAll() {
		console.log('select all');
	}
	selectUnread() {
		console.log('selected unread');
	}
	selectRead() {
		console.log('select read');
	}

	nextRight() {
		console.log('next email RIGHT');
	}

	nextLeft() {
		console.log('next email LEFT');
	} 

} // emailcontrolController
export default emailcontrolController;
