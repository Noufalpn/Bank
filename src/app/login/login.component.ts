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

login(){
  var acnum=this.acno
  var psw=this.psw
  const result=this.ds.login(acnum,psw)
  if(result){
    alert('login success')
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert("incorrect acno or password")
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

