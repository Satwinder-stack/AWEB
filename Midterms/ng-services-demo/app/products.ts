import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  product: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private storageKey = 'products';
  private products: Product[] = [];

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.products = JSON.parse(saved).map((p: any) => ({
        ...p,
        price: Number(String(p.price).replace(/,/g, ''))
      }));
    } else {
      this.products = [
        {
          id: 101,
          product: 'Logitech Mouse',
          description: '6 Button Mechanical Mouse',
          price: 1200
        },
        {
          id: 102,
          product: 'JBL BT Speaker',
          description: 'Waterproof Radio 360 Surround',
          price: 3500
        },
        {
          id: 103,
          product: 'Mechanical Keyboard',
          description: 'Hot-swappable RGB Backlit',
          price: 2800
        },
        {
          id: 104,
          product: 'Oculus Meta',
          description: 'All-in-one Gaming Headset',
          price: 22000
        }
      ];
      this.saveToStorage();
    }
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.saveToStorage();
  }

  updateProduct(updated: Product) {
    const index = this.products.findIndex(p => p.id === updated.id);
    if (index !== -1) {
      this.products[index] = updated;
      this.saveToStorage();
    }
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.products));
  }
}
