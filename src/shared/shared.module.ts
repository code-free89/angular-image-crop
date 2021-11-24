import { NgModule } from "@angular/core";
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatButtonModule } from '@angular/material/button';
import { ImageCropDialogComponent } from "src/components/image-crop-dialog/image-crop-dialog.component";

@NgModule({
  declarations: [
    ImageCropDialogComponent,
  ],
  imports: [
    ImageCropperModule,
    MatButtonModule
  ],
  exports: [
    ImageCropDialogComponent,
    MatButtonModule
  ]
})
export class SharedModule {}