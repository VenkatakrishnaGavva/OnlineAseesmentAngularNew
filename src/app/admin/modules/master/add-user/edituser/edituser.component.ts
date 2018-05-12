import { Component,OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AccountMangementService } from '../../../../../login/Shared/accountmanagement.service';
import { RoleModulePermissionMapService } from '../../role-module-permission-map/services/role-module-permission-map.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  public EditUserData : any;

  public RoleNameList :any[];
  public IsUpdateSuccess:boolean;
   public userRegistrationForm : FormGroup;
   public userRegistrationprocessStarted :boolean = false;
 public isUserCreationSuccess:boolean =false;
   constructor(private fb:FormBuilder, private userService: UserService, private accountService:AccountMangementService, private roleService: RoleModulePermissionMapService,private router: Router) {
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
         FirstName:[this.EditUserData.FirstName,Validators.required],
         LastName:[this.EditUserData.LastName,Validators.required],
         EmailAddress:[this.EditUserData.EmailAddress,Validators.required],
         RoleId:[roleId,Validators.required]
       });
     
 
    }
    PostUserCreationSubmitted(data:any)
    {
     if(this.userRegistrationForm.valid)
     {
      let userFormData = data.value;
      this.userRegistrationprocessStarted = true;
   userFormData.ModifiedBy = sessionStorage.getItem("userid");
   userFormData.Role ={};
   userFormData.UserId=this.EditUserData.UserId;
   userFormData.Role.RoleId= this.userRegistrationForm.value.RoleId;
  this.userService.UpdateUser(userFormData).subscribe(
 
    response=>{
     this.userRegistrationprocessStarted=false;
     this.IsUpdateSuccess=true;
     this.userRegistrationForm.reset();
     this.router.navigate(['/dashboard/master/ShowAllUsers']);
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
