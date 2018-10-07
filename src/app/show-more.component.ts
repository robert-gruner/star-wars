import {
  Component,
  Input,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { TreeComponent } from './tree.component';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
})
export class ShowMoreComponent {
  @Input()
  link: string;

  constructor(private httpClient: HttpClient,
              private dialog: MatDialog) {}

  public load(event: MouseEvent): void {

    this.httpClient.get(this.link).subscribe((data) => {
      const dialogRef = this.dialog.open(TreeComponent, {
        width:       '500px',
        data,
        role: 'alertdialog',
        hasBackdrop: true,
        position: {
          left: `${event.clientX}px`,
          top: `${event.clientY}px`,
        },
      });
    });
  }
}
