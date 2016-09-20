import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import {AdminApplicationTemplates} from "./dashboard/application_templates/application_templates.component";
import {AdminApplicationSubmissions} from "./dashboard/application_templates/application_submissions/application_submissions.component";
import {AdminClubs} from "./dashboard/clubs/clubs.component";
import {AdminApplicationTemplateDetail} from "./dashboard/application_templates/application_template-detail.component";
import {AdminEvaluations} from "./dashboard/professors/evaluations/evaluations.component";
import {AdminInternships} from "./dashboard/internships/internships.component";
import {AdminPosts} from "./dashboard/posts/posts.component";
import {AdminProfessorDepartments} from "./dashboard/professors/departments/departments.component";
import {AdminTeamMembers} from "./dashboard/team_members/team_members.component";
import {AdminProfessorDetail} from "./dashboard/professors/professor-detail.component";
import {AdminProfessors} from "./dashboard/professors/professors.component";
import { routing } from './admin.routing';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import {Admin} from "./admin.component";
import {Login} from "./login/login.component";
import {Dashboard} from "./dashboard/dashboard.component";
import {HomeNavbar} from "./dashboard/shared/navbar/home-navbar.component";
import {Sidebar} from "./dashboard/shared/sidebar/sidebar.component";
import {PostComponent} from "./dashboard/posts/post.component";
import {CKEditorModule} from 'ng2-ckeditor';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload/ng2-file-upload';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports:[ CommonModule, ReactiveFormsModule, FormsModule ,PaginationModule, CKEditorModule, DropdownModule, routing],
    declarations: [
        Login,
        Admin,
        Dashboard,
        HomeNavbar,
        Sidebar,
        PostComponent,
        AdminApplicationTemplates,
        AdminApplicationSubmissions,
        AdminClubs,
        AdminApplicationTemplateDetail,
        AdminEvaluations,
        AdminInternships,
        AdminPosts,
        AdminProfessorDepartments,
        AdminTeamMembers,
        AdminProfessorDetail,
        AdminProfessors,
        FILE_UPLOAD_DIRECTIVES,

    ],

})
export class AdminModule { }
