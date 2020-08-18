import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    // Do more processing...s
    event.returnValue = false;
}

  name: string;
  surname: string;
  age: number;
  personalForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router, public infoServ: InfoService) { }

  ngOnInit(): void {
    this.initForm();
    if(this.infoServ.pers !== undefined)
    {
      this.name = this.infoServ.pers.name;
      this.surname = this.infoServ.pers.surname;
      this.age = this.infoServ.pers.age;
      this.personalForm.get('age').setValue(this.infoServ.pers.age);
    }

  }

  initForm()
  {
    this.personalForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z -]+$/)]],
      surname: ['', [Validators.required, Validators.pattern(/^[A-Za-z -]+$/)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(150)]]
    })
  }

  onSubmit()
  {
    const toExport = {
      name: this.personalForm.get('name').value,
      surname: this.personalForm.get('surname').value,
      age: this.personalForm.get('age').value
    };
    this.infoServ.infoSub.next(toExport);
    this.infoServ.assign(toExport);
    this.router.navigate(['/page2']);

  }

}
