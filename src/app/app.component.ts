import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

   constructor() { }

 
   
   ngOnInit() {
     //this.postsService.getPost();
   
   }
  
}


