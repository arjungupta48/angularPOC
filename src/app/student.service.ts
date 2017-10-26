import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
  private _url:string = "assets/studentdata.json"

  constructor(private _http: Http) { }

  getStudents() {
    return this._http.get(this._url)
            .map((response: Response) => response.json());
  }
}
