import { Component } from "@angular/core";
import { IcHelloService } from "./ic-hello.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  public title = 'hello-angular-motoko';
  public response = '';
  constructor(private helloService: IcHelloService) {
    this.getResponse();
  }
  public async getResponse() {
    this.response = await this.helloService.greet('Angular');
  }
}
