class sidebarController {
	// constructor is used for setting default variables
	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.$rootScope = $rootScope;
		ctrl.title = "You've Got Stew Mail";

	// Updateds number of unread emails
    ctrl.$rootScope.$watch('inbox', () => {
        ctrl.unread = `${ctrl.$rootScope.inbox}`;
    });
	};

	composeEmail() {

		console.log("hello");
	}

}

export default sidebarController;