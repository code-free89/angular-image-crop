import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageCropDialogComponent } from 'src/components/image-crop-dialog/image-crop-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-image-crop';
  croppedImage: any = '';
  click_link: string = '';
  directions: AnimationDirectionType[] = [
    {
      id: "l-to-r",
      name: "left to right",
    }, {
      id: "l-to-r",
      name: "right to left",
    }
  ];
  selectedDirection: AnimationDirectionType = this.directions[0];

  constructor(public dialog: MatDialog) {}
  
  fileChangeEvent(event: any): void {
    const dialogRef = this.dialog.open(ImageCropDialogComponent, {
      width: '450px',
      data: {changeEvent: event},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.croppedImage = result;
    });
  }
}
