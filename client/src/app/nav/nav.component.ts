import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule],
  templateUrl: './nav.component.html',
   styleUrls: ['./nav.component.css']
})
export class NavComponent {
  accountservice = inject(AccountService);
  model: any ={};

  login(){
    this.accountservice.login(this.model).subscribe(
      {
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.error(error);
        }
      }
    );
  }  
    logout(){
      this.accountservice.logout();
      console.log('User logged out');
    }

}
