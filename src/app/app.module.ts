import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsServices } from './services/QuestionsServices';
import { MatRadioModule } from '@angular/material/radio';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AnswerPatientServices } from './services/AnswerPatientServices';
import { PatientsServices } from './services/PatientsServices';
import { DepartmentService } from './services/DepartmentService';
import { TownServices } from './services/TownServices';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatTabsModule} from '@angular/material/tabs';
import { MedicalComponent } from './medical/medical.component';
import {MatTableModule} from '@angular/material/table';
import { MedicalService } from './services/MedicalService';
import { TracingService } from './services/TracingService';
import { TracingComponent } from './tracing/tracing.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AgmCoreModule } from '@agm/core';
import {MapComponent} from './map/map.component';
import {ChartComponent} from './chart/chart.component';
import {FooterComponent} from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import {ChartServices} from './services/ChartServices'
import {MapServices} from './services/MapServices'
import { from } from 'rxjs';
const routes: Routes = [
  { path: 'patients', component: PatientsComponent },// canActivate: [AuthGuard]
  { path: 'test', component: TestComponent , canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  { path: 'login', component: LoginComponent },
  { path: 'medical', component: MedicalComponent, canActivate: [AuthGuard] },
  { path: 'tracing', component: TracingComponent, canActivate: [AuthGuard] },
  { path: 'map', component: MapComponent},
  { path: 'chart', component: ChartComponent}
];
@NgModule({
    declarations: [
      FooterComponent,
      ChartComponent,
      MapComponent,
    HomeComponent,
    PatientsComponent,
    TestComponent,
    LoginComponent,
    AdminComponent,
    MedicalComponent,
    TracingComponent,
  ],
  imports: [
    ChartsModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    HttpClientModule,
    MatRadioModule,
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2N4G8h7_SLojvPyJFbBHD3pPXoss64Jg',
      libraries: ['places']
    })

  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  bootstrap: [HomeComponent,FooterComponent],
  providers: [MapServices,ChartServices,TracingService,QuestionsServices, AnswerPatientServices, PatientsServices, DepartmentService, TownServices,MedicalService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})

export class AppModule { }
