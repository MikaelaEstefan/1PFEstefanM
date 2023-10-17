import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './dashboard/components/toolbar/toolbar.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { IconsComponent } from './dashboard/icons/icons.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UsersDialogComponent } from './users/components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './dashboard/pages/users/components/users-table/users-table.component';
import { ModelsComponent } from './dashboard/pages/users/models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent,
    CoursesComponent,
    FormsComponent,
    HomeComponent,
    IconsComponent,
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
