/*
========================================================
; Title: Assignment 9.3 - Bob's Computer Repair Shop
; Author: Gustavo Roo Gonzalez
; Date: 05 March 2022
; Description: Bob's Computer Repair Shop with Angular
========================================================
*/

import { Component, OnInit } from '@angular/core';
import { RepairService } from '../models/repair-service';
import { ShopService } from '../services/shop.service';
import { Bill } from '../services/bill';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceComponent } from '../invoice/invoice.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //Defining variables repairServices & bill
  repairServices: RepairService[];
  bill: Bill;

  constructor(private dialog: MatDialog, private shopService: ShopService) {
    this.repairServices = shopService.getRepairServices();
    this.bill = new Bill();
  }

  ngOnInit(): void {}
  //Clearing the bill object
  clearBill(): void {
    //Looping over the repair-services array and setting each service to unchecked.
    for (let item of this.repairServices) {
      item.checked = false;
    }
    //Returning new bill object
    this.bill = new Bill();
  }

  submit(): void {
    console.log(this.repairServices);

    for (let item of this.repairServices) {
      if (item.checked) {
        this.bill.addShopItem(item);
      }
    }

    console.log(this.bill.shopItems);
    console.log(this.bill.getShopTotal());

    const dialogRef = this.dialog.open(InvoiceComponent, {
      data: {
        bill: this.bill,
      },
      disableClose: true,
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        alert('Your order has been confirmed!');
        this.clearBill();
      } else {
        alert('Your order has been canceled.');
        this.clearBill();
      }
    });
  }
}
