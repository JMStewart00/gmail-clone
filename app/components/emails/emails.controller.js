class emailsController {
    // constructor is used for setting default variables
    constructor($rootScope, $interval) {
        let ctrl = this;
        ctrl.$rootScope = $rootScope;
        ctrl.title = "You've Got Stew Mail";

         ctrl.tabs = [
            {
                name: 'Primary',
            },
            {
                name: 'Social',
            },
            {
                name: 'Promotions',
            },
            {
                name: 'Updates',     
            },
        ];

        ctrl.emails = [ {
            name: "Brandon Spencer",
            email: "brandon@awesomeinc.com",
            subject: 'Please help me...',
            description: "none",
            date: '06/10/17',
            viewed: false,
            tag: false,
            important: false,
            starred: false,
            img: false,
        }];
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


    } //constructor

 randomEmail() {
    let ctrl = this;

    let date = new Date();
    date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    $.ajax({
      url: 'https://randomuser.me/api/?nat=us',
      dataType: 'json',
      success: (data) => {
        let description = data.text;
        let res = data.results[0];
        let email = {
            name: `${res.name.first} ${res.name.last}`,
            email: res.email,
            subject: 'Random',
            description: description,
            date: date,
            viewed: false,
            tag: false,
            important: false,
            starred: false,
            img: res.picture.thumbnail,
        };
        ctrl.emails.push(email);
        console.log(data);
        console.log(data.results[0].email);
        ctrl.newEmails();
     }
    });
        
    } //randomEmail()

        newEmails() {
        const ctrl = this;
        let count = 0;
        ctrl.emails.map((email) => {
            if (!email.viewed) {
                count++;
            }
        });
        
        ctrl.$rootScope.inbox = count;
    }




} //controller


export default emailsController;