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
