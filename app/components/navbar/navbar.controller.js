class navbarController {
	// constructor is used for setting default variables
	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.title = "You've Got Stew Mail";
	};

	home() {
		location.reload();
	}	

	search() {
		console.log('search');
	}

	editProfile() {
		console.log('Edit Profile');
	}

	changeNots() {
		console.log('Notifications');
	}

}

export default navbarController;