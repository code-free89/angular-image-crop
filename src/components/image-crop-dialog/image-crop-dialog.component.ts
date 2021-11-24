import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-crop-dialog',
  templateUrl: './image-crop-dialog.component.html',
  styleUrls: ['./image-crop-dialog.component.scss']
})
export class ImageCropDialogComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropImage: any;

  constructor(
    public dialogRef: MatDialogRef<ImageCropDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {changeEvent: any},
  ) {}

  ngOnInit(): void {
  }


  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
      /* show cropper */
  }

  cropperReady() {
      /* cropper ready */
  }

  loadImageFailed() {
      /* show message */
  }

  cropImageClick() {
    this.dialogRef.close(this.croppedImage);
  }
}
