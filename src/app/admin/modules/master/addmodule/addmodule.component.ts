import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit {
  public moduleCreationForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.moduleCreationForm = this.fb.group(
      {
        ModuleName: ['', [Validators.required,this.IsModuleAlreadyExists]],
        Description:['',Validators.required]
      }
    );
   }
   IsModuleAlreadyExists(control: AbstractControl) {
   
    if (control.value=="Master") {
      return { IsModuleExistsConditionFailed: true };
    }
    return null;
  }

  ngOnInit() {
  }

}
