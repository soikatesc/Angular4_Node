import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";

@Injectable()
export class AuthService {

	constructor(private http: Http) {}

	signup(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/user', body, {headers: headers})
			.map(
				(response: Renponse) => {
					const data = response.json();
					return data;
				}
			)
			// .catch((err: Response) => Observable.throw(err.json()));
	}

	signin(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
			.map(
				(response: Renponse) => {
					const data = response.json();
					return data;
				}
			)
			// .catch((err: Response) => Observable.throw(err.json()));
	}
}