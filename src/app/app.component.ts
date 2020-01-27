import { Component, OnInit } from "@angular/core";
import { user }from './user.model';
import { FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
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
      gender:'',
      address:this.formBuilder.group({
      streetNo:'',
      houseNo:'',
      postalCode:''
     
     }),
      hobbies:this.formBuilder.array([]),
      //this.userFormGroup.controls.fullName.SetValue("Heer"),
    });
  }
    addHobby()
    {
      const hobby=this.userFormGroup.controls.hobby as FormArray;
      hobby.push(this.formBuilder.group({
        hobbyName:''
      }));
    }
  submit()
  {
    console.log(this.userFormGroup.value);
  }
  
}
