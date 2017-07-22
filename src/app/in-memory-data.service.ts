/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */

 //import Inmemory db services
import { InMemoryDbService } from 'angular-in-memory-web-api';
//export inmemory data class
export class InMemoryDataService implements InMemoryDbService {
  //creating db
  createDb() {
    //array cass
    const cars = [
      { id: 0,  name: 'Acura', des: 'Acura is distinguished as being Japan’s first luxury automotive brand.', img: 'app/img/Acura-Logo.jpg' },
      { id: 1, name: 'Alfa Romeo', des: 'Alfa Romeo is a name synonymous with style and luxury and is one of the best luxury car manufacturers in the world.', img: 'app/img/alfa-romeo-logo.jpg' },
      { id: 2, name: 'Aston Martin', des: 'The Aston Martin Lagonda Limited has a long history filled with numerous difficulties.', img: 'app/img/aston-martin-logo2.jpg' },
      { id: 3, name: 'Audi', des: 'Audi AG, one of the best car manufacturers in the world today, was launched way back in 1885', img: 'app/img/audi-logo.jpg' },
      { id: 4, name: 'Bentley', des: 'A renowned British luxury automaker, Bentley is a subsidiary owned by the German car manufacturer Volkswagen AG', img: 'app/img/Bentley-Logo.jpg' },
      { id: 5, name: 'BMW', des: 'BMW, short for ‘Bayerische Motoren Werke’, which means ‘Bavarian Motor Works’ in English, has come a long way since its inception and has become one of the most popular sports, luxury, and family car manufacturers today. ', img: 'app/img/bmw-logo1.jpg' },
      { id: 6, name: 'Bugatti', des: 'Renault, the world famous manufacturer of lorries, vans, buses, tractors, and cars, was founded in 1899.', img: 'app/img/renault-logo.jpg' }


    ];
    //return cars
    return {cars};
  }
}
