import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../userInfo';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss']
})

export class DisplayUserDataComponent implements OnInit
{

	user: UserInfo = new UserInfo({guid: "D21ds12x", 
		uid: "cust2dsa12dsa", 
		first_name: "John", 
		last_name: "Doe", 
		email: "email@email.com", 
		zipcode: 10283,
		password: "Idasn2x2#"});

	constructor(private http: HttpClient, private route: ActivatedRoute) {

	}

	private subscriber: any;

	ngOnInit()
	{
		this.subscriber = this.route.params.subscribe(params => {
	       
	       this.http.get('/api/v1/customer/' + params.uid).subscribe((data:any) => {

				this.user = new UserInfo(data.customer);
		    });
	    });
	}

}