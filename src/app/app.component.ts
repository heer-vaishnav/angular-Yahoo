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
      hobbies:this.formBuilder.array([])
    }),
   this.userFormGroup.setValue({
    fullName: 'Wilson',
   surname: 'Xyz',
   email: 'wilsondcousta@gmail.com',
   password:'Abc',
   mobile:'12345',
   gender:'M',
   address:'gg hfvhfkdfj vudkifb',
   hobbies:'Dancing',
   streetNo:'2',
   houseNo:'5',
   postalCode:'344'
  });
  }
  patchValue()
  {
    this.userFormGroup.controls.fullName.patchValue("Max");
  }
  reset()
  {
    this.userFormGroup.reset();
  }
    addHobby()
    {
      const hobby=this.userFormGroup.controls.hobbies as FormArray;
      hobby.push(this.formBuilder.group({
        hobbyName:''
      }));
    }
  submit()
  {
    console.log(this.userFormGroup.value);
  }
  
}
