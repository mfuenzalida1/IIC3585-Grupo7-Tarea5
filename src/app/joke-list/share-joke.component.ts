import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    joke: String;
  }

@Component({
  selector: 'app-share-joke',
  templateUrl: 'share-joke.components.html',
  styleUrls: ['./joke-list.component.css']
})
export class ShareJokeDialog {

    constructor(public dialogRef: MatDialogRef<ShareJokeDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    shareByEmail() {
        location.href = `mailto:?subject=Te comparto un chiste muy bueno que encontre!!&body=${this.data.joke}`;
    }
    shareByWhatsapp() {
        var joke: String = this.data.joke.replace(' ', '%20');
        window.open(`https://api.whatsapp.com/send?phone=&text=${joke}`, "_blank");
    }

    closeDialog() {
        this.dialogRef.close('Pizza!');
    }
}