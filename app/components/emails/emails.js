import emailsComponent from 'emails.component';

let emailsModule = angular.module('emails', [])
.component('emails', emailsComponent);

export default emailsModule;
