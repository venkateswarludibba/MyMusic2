import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseCls } from 'src/app/utilites/model/responseCls';
import { AuthenticationService } from 'src/app/utilites/services/authentication.service';

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
    private formBuilder:FormBuilder,
    private authService:AuthenticationService,
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
    this.signupForm = this.formBuilder.group({
      UserName:['',Validators.required],
      EmailID:['',Validators.required],
      Password:['',Validators.required]
    })
  }

  signup(){
    debugger
    this.isSubmitted=true;
    if(this.signupForm.invalid){
       return;
    }
   debugger
   this.authService.signUp(this.signupForm.value).subscribe((res:ResponseCls) => {
    debugger
      if(res.isSuccess)
      {
         alert('Successfully regestered!');
         this.router.navigate(['/myUdhay']);
      }
      else{
        alert(res.statusMessage);
        this.router.navigate(['/login']);
      }
   })
  }

  ngOnDestroy(): void {
   
        if (this.linkElement) {
    document.head.removeChild(this.linkElement);
  }
  }
}
