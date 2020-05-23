import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddSongPageRoutingModule } from './add-song-routing.module';

import { AddSongPage } from './add-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSongPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddSongPage]
})
export class AddSongPageModule {}


// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @NgModule({
//   imports: [
//     FormsModule,
//     ReactiveFormsModule
//   ]
// })

// export class AddSongPageModule {}