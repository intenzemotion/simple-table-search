import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  tableData = [
    { id: 1, name: 'John Doe', age: 20, income: 1000 },
    { id: 2, name: 'James Foo', age: 25, income: 3500 },
  ];

  filteredData = [...this.tableData];

  applyCreditCard(id: number): void {
    console.log(`User ID is ${id}`);
  }

  filterTable(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    const searchTerm: string = filterValue;
    if (searchTerm) {
      this.filteredData = this.tableData.filter(
        (row) => row.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // if empty, show default data
      this.filteredData = [...this.tableData];
    }
  }

}
