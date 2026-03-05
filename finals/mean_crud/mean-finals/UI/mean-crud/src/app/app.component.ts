import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly APIUrl = "http://localhost:5038/api/books/";
  books: any = [];
  searchText: string = '';
  isEditMode: boolean = false;
  currentEditId: string | null = null;

  bookForm = { title: '', author: '', category: '', description: '', price: 0 };

  constructor(private http: HttpClient) {}

  ngOnInit() { this.refreshBooks(); }

  get filteredBooks() {
    return this.books.filter((b: any) =>
      b.title?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      b.author?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get totalInventoryValue() {
    return this.books.reduce((acc: number, curr: any) => acc + (Number(curr.price) || 0), 0);
  }

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe(data => this.books = data);
  }

  addBook() {
    const formData = new FormData();
    formData.append("title", this.bookForm.title);
    formData.append("author", this.bookForm.author);
    formData.append("category", this.bookForm.category);
    formData.append("description", this.bookForm.description);
    formData.append("price", this.bookForm.price.toString());

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(() => {
      this.refreshBooks();
      this.resetForm();
    });
  }

  editButtonClick(book: any) {
    this.isEditMode = true;
    this.currentEditId = book.id;
    this.bookForm = { title: book.title, author: book.author, category: book.category, description: book.desc, price: book.price };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateBook() {
    const formData = new FormData();
    formData.append("id", this.currentEditId!);
    formData.append("title", this.bookForm.title);
    formData.append("author", this.bookForm.author);
    formData.append("category", this.bookForm.category);
    formData.append("description", this.bookForm.description);
    formData.append("price", this.bookForm.price.toString());

    this.http.put(this.APIUrl + 'UpdateBook', formData).subscribe(() => {
      this.refreshBooks();
      this.cancelEdit();
    });
  }

  deleteBook(id: any) {
    if(confirm("Delete this book?")) {
      this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(() => this.refreshBooks());
    }
  }

  cancelEdit() { this.isEditMode = false; this.currentEditId = null; this.resetForm(); }
  resetForm() { this.bookForm = { title: '', author: '', category: '', description: '', price: 0 }; }
}
