import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../app/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  http: HttpClient = inject(HttpClient)
  private baseUrl = environment.BASEURL;

  // Display About Details form the database
  DisplayAboutDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/about/display`)
  }

  // Display Services form the database
  DisplayServices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/service/display`)
  }

  // Display Soft Skill form the database
  DisplaySoftSkills(): Observable<any> {
    return this.http.get(`${this.baseUrl}/skill/softskill/display`)
  }

  // Display Technical form the database
  DisplayTechnicalSkills(): Observable<any> {
    return this.http.get(`${this.baseUrl}/skill//technicalskill/display`)
  }

  // Display Education form the database
  DisplayEducations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/education/display`)
  }

  // Display project form the database
  DisplayProjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/project/display`)
  }

  // Display PG details form the database
  DisplayPGdetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/about/displayPG`)
  }
  // Display UG details form the database
  DisplayUGdetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/about/displayUG`)
  }

  // send the message to database
  CreateMessage(request: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/message/create`, request)
  }

}
