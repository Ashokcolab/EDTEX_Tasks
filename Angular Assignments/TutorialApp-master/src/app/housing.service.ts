import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  readonly baseUrl = '/assets/images' ;
  housingLocationList : HousingLocation[] = [
    {
      id : 1,
        name:"Test Home1",
        city:"chicago",
        state:"chi",
        photo: `${this.baseUrl}/one.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },
    {
      id : 2,
        name:"Test Home2",
        city:"Los angles",
        state:"LA",
        photo: `${this.baseUrl}/two.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 3,
        name:"Test Home3",
        city:"NewYork",
        state:"NY",
        photo: `${this.baseUrl}/three.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 4,
        name:"Test Home4",
        city:"Chicago",
        state:"chi",
        photo: `${this.baseUrl}/four.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 5,
        name:"Test Home5",
        city:"Los angles",
        state:"LA",
        photo: `${this.baseUrl}/five.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 6,
        name:"Test Home6",
        city:"NewYork",
        state:"NY",
        photo: `${this.baseUrl}/six.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 7,
        name:"Test Home7",
        city:"Chicago",
        state:"chi",
        photo: `${this.baseUrl}/seven.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 8,
        name:"Test Home8",
        city:"Los angles",
        state:"LA",
        photo: `${this.baseUrl}/eight.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },{
      id : 9,
        name:"Test Home9",
        city:"NewYork",
        state:"NY",
        photo: `${this.baseUrl}/nine.jpg` ,
        availableUnits: 99 ,
        wifi:true,
        laundry : false,
    },
  ]



  getAllHousingLocations(): HousingLocation [] {
      return this.housingLocationList;
  }

  getHousingLocationById( id: number) :HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id == id);
  }
  submitApplication(firstName:string,lastName:string,email:string){
    console.log(`Homes application received:firstName:${firstName},lastName:${lastName},email:${email}.`);
  }
}
