import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = ''; 
  email: string = '';
  message: string='';
  age: number | null = null;
  jsonData: any[]=[];
  searchTerm: string = '';

  constructor(private formDataService: FormDataService,private auth:AuthService,private http:HttpClient,private router:Router) {}
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:4000/formData').subscribe(data => {
      this.jsonData = data;
    });
  }
  logout(){
      this.auth.logout();
  }
  truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substr(0, maxLength) + '...';
    }
  }
  onCardHover(item: any) {
    item.hovered = !item.hovered;
  }
  onCardClick(name: string) {
    this.searchTerm=name;
    this.router.navigate(['/search-results/'+name], { queryParams: { searchTerm: this.searchTerm } }); 
  }
  getRandomColor(index: number): string {
    const colors = [
      'rgb(172, 221, 222)',
      'rgb(202, 241, 222)',
      'rgb(225, 248, 220)',
      'rgb(254, 248, 221)',
      'rgb(255, 231, 199)',
      'rgb(247, 216, 186)'
      
    ];
    return colors[index % colors.length];
  }
  removeQuotes(str: string): string {
    return str.replace(/"/g, "");
  }
}
