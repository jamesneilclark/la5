import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CoursesComponent } from './courses/courses.component';
const routes: Routes = [
{
path: '',
component: HomeComponent
},
{
    path: 'courses',
    component: CoursesComponent
},
{
    // takes user to home when specified route is undefined
    path: '**',
    component: HomeComponent
}

];

export const AppRoutes = RouterModule.forRoot(routes);
