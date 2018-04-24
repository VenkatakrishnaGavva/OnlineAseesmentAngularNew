import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userRegistrationForm : FormGroup;
  public userRegistrationprocessStarted :boolean = false;
public isUserCreationSuccess:boolean =false;
  constructor(private fb:FormBuilder, private userService: UserService) {
    this.userService.IsUserFormDataSubmitted.subscribe(
      data=>{this.PostUserCreationSubmitted(data)}
    );
    this.userRegistrationForm = this.fb.group(
      {
        userName: ['', [this.IsUserExists,Validators.required]],
        Password:['',Validators.required],
        ConfirmPassword:['',[Validators.required,this.PasswordAndConfirmPasswordCheck ]],
        FirstName:['',Validators.required],
        LastName:['',Validators.required],
        EmailAddress:['',Validators.required]
      });
   }
   PostUserCreationSubmitted(data:any)
   {
     this.isUserCreationSuccess = true;
     this.userRegistrationprocessStarted = false;
   }
   PasswordAndConfirmPasswordCheck(control:AbstractControl)
  {
    const group = control.parent;
    if(group)
    {
  const password= group.controls["Password"].value;
  
    if (control.value!=password) {
      
      return { IsPasswordAndConfirmPasswordSame: true };
    }
  }
    return null;
  }

   IsUserExists(control: AbstractControl) {
   
    if (control.value=="venkat") {
      return { IsUserExistsConditionFailed: true };
    }
    return null;
  }

  OnFormSubmit()
  {
    
    if(this.userRegistrationForm.valid)
    {
    this.userRegistrationprocessStarted = true;
      this.userService.PostFormData(this.userRegistrationForm.value);
    }
  }
  ngOnInit() {
  }

}
