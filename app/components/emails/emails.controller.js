class emailsController {
    // constructor is used for setting default variables
    constructor($rootScope, $interval) {
            let ctrl = this;
            ctrl.$rootScope = $rootScope;


            ctrl.tabs = [{
                    name: 'Primary',
                    class: 'glyphicon-inbox'
                }, {
                    name: 'Social',
                    class: 'glyphicon-user'
                }, {
                    name: 'Promotions',
                    class: 'glyphicon-tags'
                }, {
                    name: 'Updates',
                    class: 'glyphicon-info-sign'
                }, {
                    name: 'Forums',
                    class: 'glyphicon-comment'
                }],

                ctrl.emails = [{
                    name: 'Archer',
                    subject: 'Black Turtle Neck Sale',
                    description: 'stuff and things',
                    date: '5/30/2017',
                    tag: ['Primary', 'Promotions'],
                    read: false,
                    important: false,
                    starred: false
                }, {
                    name: 'Lana',
                    subject: 'Save the whales',
                    description: 'stuff and things',
                    date: '5/29/2017',
                    tag: ['Primary', 'Forums'],
                    read: false,
                    important: false,
                    starred: false
                }],
                // ctrl.randomEmail(ctrl.tabs);

            $interval(() => {
                ctrl.randomEmail(ctrl.tabs);
            }, 1500, [15]);

            // Create new email...
            ctrl.$rootScope.$watch('compose', () => {
                ctrl.compose = ctrl.$rootScope.compose;
            });

            ctrl.$rootScope.$watch('searchText', () => {
                // watches for when the text box gets updated
                ctrl.searchText = ctrl.$rootScope.searchText;
            });

            ctrl.activeTab = 'Primary';

            ctrl.$rootScope.$watch('inboxClicked', () => {
                ctrl.$rootScope.inboxClicked = false;
                ctrl.emailContent = false;
                ctrl.$rootScope.filter = false;
                console.log('false');
            });


        } //constructor

    randomEmail(tabs) {
            let ctrl = this;
            let category = tabs[Math.floor(Math.random() * tabs.length)].name;

            let date = new Date();
            date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

            $.ajax({
                url: 'http://hipsterjesus.com/api/',
                dataType: 'json'
            }).then((data) => {
                let description = data.text;
                // hits random user api to generate a random user
                $.ajax({
                    url: 'https://randomuser.me/api/?nat=us',
                    dataType: 'json',
                    success: (data) => {
                        let res = data.results[0];
                        let email = {
                            name: `${res.name.first} ${res.name.last}`,
                            email: res.email,
                            subject: '',
                            description: description,
                            date: date,
                            read: false,
                            tag: ['Primary', category],
                            important: false,
                            starred: false
                        }
                        ctrl.emails.push(email);
                        ctrl.newEmails();
                        
                    }
                });
            })

        } //randomEmail()

    newEmails() {
            const ctrl = this;
            let count = 0;
            ctrl.emails.map((email) => {
                if (!email.read) {
                    count++;
                }
            });

            ctrl.$rootScope.inbox = count;
        } // newEmails()

    cancelCompose() {
            const ctrl = this;
            ctrl.$rootScope.compose = !ctrl.$rootScope.compose;
            ctrl.compose = ctrl.$rootScope.compose;

            console.log(ctrl.$rootScope.compose);
        } //cancelCompose()

    updateTab(tabName) {
        const ctrl = this;
        ctrl.activeTab = tabName;
    };

        // Sets email to viewed
    emailViewed(email) {
        const ctrl = this;
        email.viewed = true;
        ctrl.emailContent = email;
        ctrl.newEmails();
    };
    



} //controller


export default emailsController;