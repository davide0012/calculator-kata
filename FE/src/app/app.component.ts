import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SumService } from './sum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';

  sumForm!: FormGroup;
  result: string = ''

  constructor(private fb: FormBuilder,
              private sumService: SumService) {}

  ngOnInit() {
    this.sumForm = this.fb.group({
      value1: ['', Validators.required],
      value2: ['', Validators.required]
    })
  }

  sum() {
    this.sumService.sum(this.sumForm.value.value1, this.sumForm.value.value2).subscribe(
      (data: any) => this.result = data == -1 ? 'Errore nell\inserimento dei valori': data,
      (err: any) => console.error(err)
    )
  }
}
