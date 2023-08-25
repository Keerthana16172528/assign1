import { Component, OnInit } from '@angular/core';
import { ProductlistService } from './productlist.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export class AppComponent {
  //title = 'assign1';
 // showList=false;
 // constructor(public product:ProductlistService)
  //{}

  //toggleList() {
    
   //   this.showList = !this.showList; // Toggle the value
   // }
  //}
  //api part
  
  export class ApiComponent implements OnInit {
    apiData: any; 
    
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.fetchData();
    }
  
    fetchData(): void {
      
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
        this.apiData = data;
      });
    }}

    //observable

    export class AppComponent implements OnInit {
      ngOnInit(): void {
        this.createObservable();
      }
    
      createObservable(): void {
        
        const numberObservable: Observable<number> = interval(1000);
    
        
        const subscription = numberObservable.subscribe((number) => {
          console.log(number);
        });
        
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}

function interval(arg0: number): Observable<number> {
  throw new Error('Function not implemented.');
}
