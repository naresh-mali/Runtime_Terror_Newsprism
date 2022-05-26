import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  emailProp;
  nameProp;
  messageProp;
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  submit()
  {  if(this.emailProp)
    {

    
      this.ds.submit({email:this.emailProp, name:this.nameProp, message:this.messageProp})
      .subscribe((response)=>{
        if(response.status=="ok")
        {

          alert('Your enquiry are submitted');
          alert('We will contact you Soon');
          this.router.navigate(['/']);


        }
      })}
  }

}
