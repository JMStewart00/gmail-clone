import appComponent from './app.component';
import navbarComponent from './components/navbar/navbar.component';
import sidebarComponent from './components/sidebar/sidebar.component';
import emailcontrolComponent from './components/emailcontrol/emailcontrol.component';
import emailsComponent from './components/emails/emails.component';

angular.module('app', [])
.component('app', appComponent)
.component('navbar', navbarComponent)
.component('sidebar', sidebarComponent)
.component('emailcontrol', emailcontrolComponent)
.component('emails', emailsComponent)