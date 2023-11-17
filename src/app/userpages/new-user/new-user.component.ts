import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
CommonModule
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
userForm:FormGroup;
constructor(){
  this.userForm= new FormGroup({})
  this.createForm()
}
createForm(){
  this.userForm=new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    dob:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    address:new FormGroup({
    country:new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required])
    })
  })
}

onsave(){
      this.userForm.markAllAsTouched();
    }
}
