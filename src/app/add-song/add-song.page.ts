import { Component, OnInit, NgZone } from '@angular/core';
import { SongService } from './../shared/song.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.page.html',
  styleUrls: ['./add-song.page.scss'],
})

export class AddSongPage implements OnInit {
  songForm: FormGroup;

  constructor(
    private songAPI: SongService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    public toastCtrl: ToastController
  ) {
    this.songForm = this.fb.group({
      song_name: [''],
      artist: ['']
    })
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.songForm.valid) {
      return false;
    } else {
      this.songAPI.addSong(this.songForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.songForm.reset();
            this.router.navigate(['/home']);
          })
        });
        // this.showToast
       
    }
  }

  async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'Added Song ' + this.songForm.get("song_name").value,
      duration: 1000
    });
    await toast.present();
  }
}