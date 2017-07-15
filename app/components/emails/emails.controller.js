class emailsController {
    // constructor is used for setting default variables
    constructor($rootScope, $interval, $http, $q) {
            let ctrl = this;
            ctrl.$rootScope = $rootScope;
            ctrl.$http = $http;
            ctrl.$q = $q;


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
                    name: 'Archer Jones',
                    email: 'archie.baconman@gmail.com',
                    subject: 'Bacon Sale',
                    description: 'stuff and things',
                    date: '5/30/2017',
                    tag: ['Primary', 'Promotions'],
                    read: false,
                    important: false,
                    starred: false
                }],
                // ctrl.randomEmail(ctrl.tabs);

            $interval(() => {
                ctrl.randomEmail(ctrl.tabs);
            }, 500, [10]);

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
            });

            ctrl.$rootScope.$watch('moreEmails', () => {
                ctrl.moreEmails = ctrl.$rootScope.moreEmails;
                ctrl.randomEmail(ctrl.tabs);
            })



        } //constructor



    randomEmail(tabs) {
            let ctrl = this;
            let category = tabs[Math.floor(Math.random() * tabs.length)].name;

            let date = new Date();
            date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;


            ctrl.$q.all([
                ctrl.$http.get('https://randomuser.me/api/?nat=us'),
                ctrl.$http.get('https://baconipsum.com/api/?type=all-meat&paras=2')
            ]).then(function(data) {
                let shortSubject = data[1].data[0].substring(0, 15) + "...";
                let res = data[0].data.results[0];
                let email = {
                    name: `${res.name.first} ${res.name.last}`,
                    email: res.email,
                    subject: shortSubject,
                    date: date,
                    read: false,
                    tag: ['Primary', category],
                    important: false,
                    starred: false
                }
                ctrl.emails.push(email);
                ctrl.newEmails();
            })
            console.log('new emails!');
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

        } //cancelCompose()

    updateTab(tabName) {
        const ctrl = this;
        ctrl.activeTab = tabName;
    };

    // Sets email to viewed
    emailViewed(email) {
        let ctrl = this;
        let count = ctrl.$rootScope.inbox;
        if (email.read === false) {
            email.read = true;
            count--;
            ctrl.$rootScope.inbox = count;
        }


        


    };


    // check boxes to select all/unselect all emails
    checkAll(email) {
        let ctrl = this;
            if (ctrl.selectedAll === true) {
                ctrl.selectedAll = false;
            } else {
                ctrl.selectedAll = true;
            }
            angular.forEach(ctrl.emails, (email) => {
                email.selected = ctrl.selectedAll;
            });

        };

    



} //controller


export default emailsController;