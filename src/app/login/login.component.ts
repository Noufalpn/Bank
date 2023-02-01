import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data="Deposit Now And Make Your Future Safe"
  inputpalceholder="Account Number"

  acno=' '
  psw=' '



constructor(private router:Router,private ds:DataService){ }
ngOnInit(): void{

}

login(a:any,b:any ){
  var acnum=a.value
  var psw=b.value
  var userDetails=this.ds.userDetails
  if(acnum in userDetails){
  if(psw==userDetails[acnum]["password"]){
    alert("Login Success")
        this.router.navigateByUrl('dashboard')

  }
  else{
    alert("Incorrect Password")
  }
}
else{
  alert("acno incorrect or not registered yet")
}

}
}

// acnoChange(event:any){
//   this.acno=event.target.value
//   console.log(this.acno);
  
  
// }
// pswrdChange(event:any){
//   this.psw=event.target.value
//   console.log(this.psw);
// }

