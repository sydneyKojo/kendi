import { Routes } from '@angular/router';
import { WelcomeComponent } from './onboarding/welcome/welcome.component';
import { SocialStyleComponent } from './onboarding/social-style/social-style.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { OnboardingComponent } from './onboarding/onboarding/onboarding.component';
import { NoAuthGuard } from './guard/noAuth.guard';
import { FaithJourneyComponent } from './onboarding/faith-journey/faith-journey.component';
import { AddContactsComponent } from './onboarding/add-contacts/add-contacts.component';
import { AddComponent } from './dashboard/add/add.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { ConversationStartersComponent } from './dashboard/conversation-starters/conversation-starters.component';
import { ConversationStarterComponent } from './dashboard/conversation-starter/conversation-starter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  {
    path: 'onboarding',
    canActivate: [AuthGuard],
    component: OnboardingComponent,
    children: [
      { path: '', redirectTo: '/onboarding/welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'social-style', component: SocialStyleComponent },
      { path: 'add-contacts', component: AddContactsComponent },
      { path: 'faith-journey', component: FaithJourneyComponent },
      { path: 'create-account', component: SignupComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'add', component: AddComponent },
      { path: 'conversation-topics', component: ConversationStartersComponent },
      { path: 'conversation-topics/:id', component: ConversationStarterComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
  {path: 'auth',
    canActivate: [NoAuthGuard],
    children: [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
  ]},
];
