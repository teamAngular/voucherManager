import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ValidationsComponent implements OnInit {
  public form: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
      let password = new FormControl('', Validators.required);
      let certainPassword = new FormControl('', CustomValidators.equalTo(password));

      let first = new FormControl('', Validators.required);
      let second = new FormControl('', CustomValidators.notEqualTo(first));

      this.form = this.formBuilder.group({ 
          required: ['', Validators.required],
          maxLength:  ['', Validators.compose([Validators.required,  Validators.maxLength(10)])],
          email: ['', CustomValidators.email],
      });
  }

  public submitForm(value: any){
    console.log(value);
  }

}


