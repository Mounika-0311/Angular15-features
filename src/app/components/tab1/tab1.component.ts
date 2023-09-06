import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
  standalone:true,
  imports: [NgOptimizedImage],
})
export class Tab1Component {
constructor(private api:ApiService){
this.getData();
}
getData(){
  this.api.getPostData().subscribe((data)=>{
    console.log(data,'fghjfvjs');
  })
}
}
