import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseCls } from 'src/app/utilites/model/responseCls';
import { AuthenticationService } from 'src/app/utilites/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Local variables
  linkElement!: HTMLLinkElement;
  loginForm!:FormGroup;
  isSubmitted:boolean=false;
  get lginForm():any{
    return this.loginForm.controls;
  }

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private authService:AuthenticationService
  ) { }

  ngOnInit(): void {
  
       this.linkElement = document.createElement('link');
  this.linkElement.rel = 'stylesheet';
  this.linkElement.href = 'assets/loignSign.css';
  document.head.appendChild(this.linkElement);
     this.frmBuilder();
  }

  frmBuilder(){
    this.loginForm = this.formBuilder.group({
       UserName:['',Validators.required],
       Password:['',Validators.required]
    })
  }

  login(){
    debugger
    this.isSubmitted = true;
    if(this.loginForm.invalid)
    {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((res:ResponseCls) => {
      if(res.isSuccess)
      {
         this.router.navigate(['/myUdhay'])
      }
      else{
         alert(res.statusMessage);
        this.router.navigate(['/sign-up']);
      }
    })
   
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.linkElement) {
    document.head.removeChild(this.linkElement);
  }
  }

}
