/*
========================================================
; Title: Assignment 9.3 - Bob's Computer Repair Shop
; Author: Gustavo Roo Gonzalez
; Date: 05 March 2022
; Description: Bob's Computer Repair Shop with Angular
========================================================
*/

import { Injectable } from '@angular/core';
import { RepairService } from '../models/repair-service';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}
  //This function will get repair services
  getRepairServices(): RepairService[] {
    //This is the array of repair service objects
    const repairServices: RepairService[] = [
      {
        title: 'Password Reset - $39.99',
        amount: 39.99,
        checked: false,
      },
      {
        title: 'Keyboard Cleaning - $45.00',
        amount: 45.0,
        checked: false,
      },
      {
        title: 'Software Installation - $49.99',
        amount: 49.99,
        checked: false,
      },
      {
        title: 'Tune-Up - $89.00',
        amount: 89.99,
        checked: false,
      },
      {
        title: 'Spyware Removal - $99.99',
        amount: 99.99,
        checked: false,
      },
      {
        title: 'RAM Upgrade - $129.99',
        amount: 129.99,
        checked: false,
      },
      {
        title: 'Disk Clean-up - $149.99',
        amount: 149.99,
        checked: false,
      },
    ];

    return repairServices;
  }
}
