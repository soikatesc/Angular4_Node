import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import { User } from "./user.model";

@Component({
	selector: 'app-signup',
	templateUrl: './signin.component.html'
})

export class SigninComponent {

	myForm: FormGroup;

	constructor(private authService: AuthService, private router: Router) {}

	onSubmit() {
		const user = new User(this.myForm.value.email, this.myForm.value.password);
		this.authService.signin(user)
			.subscribe(
				(data) => {
					console.log(data);
					localStorage.setItem('token', data.token);
					localStorage.setItem('userId', data.userId);
					this.router.navigateByUrl('/');
				},
				(err) => console.log(err)
			)
		this.myForm.reset();
	}

	ngOnInit() {
		this.myForm = new FormGroup({
			'email': new FormControl(null, [
						Validators.required,
						Validators.email
					]),
			'password': new FormControl(null, Validators.required)
		});
	}

}