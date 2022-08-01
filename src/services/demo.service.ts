import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {
  constructor(private httpClient: HttpClient) {}
  students: any = [
    {
      name: 'Bert Lambert',
      phone: '(936) 239-7118',
      email: 'cursus.et@icloud.couk',
      country: 'Costa Rica',
      numberrange: 3,
    },
    {
      name: 'Gretchen Mclaughlin',
      phone: '(526) 427-0381',
      email: 'ac.sem@yahoo.ca',
      country: 'Austria',
      numberrange: 4,
    },
    {
      name: 'Herman Arnold',
      phone: '(760) 324-1377',
      email: 'sapien@yahoo.edu',
      country: 'France',
      numberrange: 9,
    },
    {
      name: 'Martin Fuentes',
      phone: '1-687-351-6884',
      email: 'ac.feugiat@outlook.couk',
      country: 'Mexico',
      numberrange: 3,
    },
    {
      name: 'Nevada Byrd',
      phone: '(926) 582-4888',
      email: 'porttitor.vulputate.posuere@protonmail.couk',
      country: 'China',
      numberrange: 1,
    },
  ];

   
  
  
}
