import {
  Component,
  Input,
  Inject,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material';

@Component({
  selector: 'app-data',
  template: `<p>{{data | json}}</p>`,
})
export class DataComponent {
  constructor(
    public dialogRef: MatDialogRef<DataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
