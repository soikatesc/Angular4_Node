import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

import { Message } from "./message.model";

@Injectable()
export class MessageService {
	private messages: Message[] = [];

	constructor(private http: Http) {}

	// addMessage(message: Message) {
	// 	this.messages.push(message);
	// 	console.log(this.messages);
	// }

	// getMessages() {
	// 	return this.messages;
	// }

	// deleteMessage(message: Message) {
	// 	this.messages.splice(this.messages.indexOf(message), 1);
	// }

	addMessage(message: Message) {
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/message', body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}

	getMessages() {
		return this.http.get('http://localhost:3000/message')
			.map((response: Response) => {
				const messages = response.json().obj;
				let transformedMessages: Messages[] = [];
				for (let message of messages) {
					transformedMessages.push(new Message(message.content, 'Dummy', message.id, null));
				}
				this.messages = transformedMessages;
				return transformedMessages;
			})
			.catch((error: Response) => Observable.throw(error.json()));
	}

	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
	}
}