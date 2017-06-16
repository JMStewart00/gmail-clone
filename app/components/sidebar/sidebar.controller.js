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

    // ctrl.$rootScope.compose = false;



	} // constructor

	composeEmail() {
		let ctrl = this;
		ctrl.compose = !ctrl.compose;
		ctrl.$rootScope.compose = true;
		console.log(ctrl.$rootScope.compose);
		console.log('clicked');
	};
};


export default sidebarController;