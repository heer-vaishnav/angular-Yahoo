import { Component, OnInit } from "@angular/core";
import { user }from './user.model';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  user:user=new user();
  userFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit()
  {
    this.userFormGroup=this.formBuilder.group({
      fullName:['',Validators.required],
      surname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required],
      gender:''
     
    });
  }
  submit()
  {
    console.log(this.userFormGroup.value);
  }
  
}
