import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  constructor(private route:ActivatedRoute, 
          private service: WelcomeDataService) { }

  ngOnInit() {
   // console.log(this.route.snapshot.params['name'])
   this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldService());
    this.service.executeHelloWorldService().subscribe(
      response => console.log(response['message'])
    );
  }

  // handleSuccessfulResponse(response){
  //   console.log(response);
  // }

}
