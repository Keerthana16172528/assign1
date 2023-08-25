import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {


  listofproducts=[
    {title:'Milk',description:'healthy',price:'35'},
    {title:'BUTTER',description:'healthy',price:'135'},
    {title:'DRY FRUIT',description:'healthy',price:'1035'}

  ]

 
}
