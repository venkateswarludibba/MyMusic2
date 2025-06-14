import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router:Router
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
    // debugger
    // this.isSubmitted = true;
    // if(this.loginForm.invalid)
    // {
    //   return;
    // }
    this.router.navigate(['/myUdhay'])
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.linkElement) {
    document.head.removeChild(this.linkElement);
  }
  }

}
