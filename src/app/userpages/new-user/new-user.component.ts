import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute, Route, Router } from '@angular/router';
CommonModule
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
userForm:FormGroup;
res:any
index:any
constructor(private activeroute: ActivatedRoute,private route:Router){
  this.userForm= new FormGroup({})
  this.createForm()
  this.activeroute.params.subscribe((result)=>{
    debugger
    this.res=Number(result['index'])
    let localdata=localStorage.getItem('userlist')
    if(localdata!=null){
      let parseddata=JSON.parse(localdata)
      this.userForm.setValue(parseddata[this.res])
      console.log(parseddata[this.res])
    }
    // this.userForm.value=JSON.parse()
    console.log(result,this.res);
    
  })
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
onreset(){
  this.userForm.reset()
}
onupdate(){
  debugger
  let localdata=localStorage.getItem('userlist')
  if(localdata!=null){
    let parseddata=JSON.parse(localdata)
    let updateddata=parseddata.splice(this.res,1,this.userForm.value)
    localStorage.setItem('userlist',JSON.stringify(updateddata))
  }
  this.res=''
  this.onreset()
  this.route.navigate(['userslist'])
}
onsave(){
  debugger
      if(this.userForm.valid){
        const localdata=localStorage.getItem('userlist')
        if(localdata!=null){
          const parseddata= JSON.parse(localdata)
          parseddata.push(this.userForm.value)
          localStorage.setItem('userlist',JSON.stringify(parseddata))
          this.userForm.reset()
        }else{
        let arr=[]
        arr.push(this.userForm.value)
        localStorage.setItem('userlist',JSON.stringify(arr))
        this.userForm.reset()
        }
      }else{
      this.userForm.markAllAsTouched();
      }
    }
}
