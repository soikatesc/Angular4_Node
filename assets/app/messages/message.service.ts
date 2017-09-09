import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

import { Message } from "./message.model";

@Injectable()
export class MessageService {
	private messages: Message[] = [];

	constructor(private http: Http) {}

	addMessage(message: Message) {
		this.messages.push(message);
		console.log(this.messages);
	}

	getMessages() {
		return this.messages;
	}

	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
	}

	// addMessage(message: Message) {
	// 	this.messages.push(message);
	// 	const body = JSON.stringify(message);
	// 	this.http.post('http:localhost:3000/message', body)
	// 		.map((response: Response) => response.json())
	// 		.catch((error: Response) => Observable.throw(error.json()));
	// }

	// getMessage() {
	// 	return this.messages;
	// }

	// deleteMessage(message: Message) {
	// 	this.messages.splice(this.messages.indexOf(message), 1);
	// }
}