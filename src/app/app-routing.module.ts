import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'RoomBooking',component:RoomBookingComponent},
  {path:'Services',component:ServicesComponent},
  {path:'Gallery',component:GalleryComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
