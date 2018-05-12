import { Component,OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from './services/user.service';
import { AccountMangementService } from '../../../../login/Shared/accountmanagement.service';
import { RoleModulePermissionMapService } from '../role-module-permission-map/services/role-module-permission-map.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 public EditUserData : any;

 public RoleNameList :any[];
  public userRegistrationForm : FormGroup;
  public userRegistrationprocessStarted :boolean = false;
public isUserCreationSuccess:boolean =false;
  constructor(private fb:FormBuilder, private userService: UserService, private accountService:AccountMangementService, private roleService: RoleModulePermissionMapService) {
    this.roleService.GetAllROles().subscribe(
      repsonse=>{
        this.RoleNameList = repsonse;
       
      }
    );
  this.userService.EditUserDetais.subscribe(
    response=>{
      this.EditUserData = response;
    }
  );

    this.userService.IsUserFormDataSubmitted.subscribe(
      data=>{this.PostUserCreationSubmitted(data)}
    );
let roleId = -1;

if(this.EditUserData.Role!=null)
{
  roleId = this.EditUserData.Role.RoleId;
}
    this.userRegistrationForm = this.fb.group(
      {
        userName: [this.EditUserData.Username, [this.IsUserExists,Validators.required]],
        Password:['',Validators.required],
        ConfirmPassword:['',[Validators.required,this.PasswordAndConfirmPasswordCheck ]],
        FirstName:[this.EditUserData.FirstName,Validators.required],
        LastName:[this.EditUserData.LastName,Validators.required],
        EmailAddress:[this.EditUserData.EmailAddress,Validators.required],
        RoleId:[roleId,Validators.required]
      });
      if(this.EditUserData)
      {
        this.userRegistrationForm.controls['Password'].setValidators([Validators.required]);
        this.userRegistrationForm.controls['ConfirmPassword'].setValidators([Validators.required]);
        this.userRegistrationForm.controls['ConfirmPassword'].setValidators([ this.PasswordAndConfirmPasswordCheck]);
       
      }

   }
   PostUserCreationSubmitted(data:any)
   {
    if(this.userRegistrationForm.valid)
    {
     let userFormData = data.value;
     this.userRegistrationprocessStarted = true;
  userFormData.CreatedBy = sessionStorage.getItem("userid");
  userFormData.Role ={};
  userFormData.Role.RoleId= this.userRegistrationForm.value.RoleId;
 this.userService.PostFormData(userFormData).subscribe(

   response=>{
    this.userRegistrationprocessStarted=false;
    this.isUserCreationSuccess=true;
    this.userRegistrationForm.reset();
   }
 );
}
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

  
  ngOnInit() {
  }

}
