import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userslist:any=[]
  
constructor(private router:Router, private activeroute:ActivatedRoute){
  let localdata=localStorage.getItem('userlist')
  if(localdata!=null){
    this.userslist=JSON.parse(localdata)
  }
}
onedit(i:any){
this.router.navigate(['newuser',i])
}
ondelete(i:any){
debugger
let localdata=localStorage.getItem('userlist')
if(localdata!=null){
    this.userslist=JSON.parse(localdata)
    let updatedlist=this.userslist.splice(i,1)
    localStorage.setItem('userlist',JSON.stringify(updatedlist))
  }
}
}
