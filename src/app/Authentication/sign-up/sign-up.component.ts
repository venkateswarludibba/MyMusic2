import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  //Local variables
  linkElement!: HTMLLinkElement;
  signupForm!:FormGroup;
  isSubmitted:boolean = false;


  get frmsignup():any{
    return this.signupForm.controls;
  }

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.linkElement = document.createElement('link');
  this.linkElement.rel = 'stylesheet';
  this.linkElement.href = 'assets/loignSign.css';
  document.head.appendChild(this.linkElement);
    this.frmBuilder();
  }

  frmBuilder(){
    this.signupForm = this.formBuilder.group({
      UserName:['',Validators.required],
      UserEmail:['',Validators.required],
      Password:['',Validators.required]
    })
  }

  signup(){
    this.isSubmitted=true;
    if(this.signupForm.invalid){
       return;
    }
  }

  ngOnDestroy(): void {
   
        if (this.linkElement) {
    document.head.removeChild(this.linkElement);
  }
  }
}
