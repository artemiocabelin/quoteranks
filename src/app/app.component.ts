import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];
  getQuotes(event) {
    console.log(event);
    console.log('got quote');
    this.quotes.push(event);
  }

  removeQuotes(event) {
    this.quotes.splice(event,1);
  }

  sortQuotes() {
    insertionSort(this.quotes);
  }
}

function insertionSort(arr) {
  for(var i=arr.length-1; i >= 0; i--) {
    var currValue = arr[i];
    var position = i;
    
    while (position < arr.length-1 && arr[position+1].votes > currValue.votes) {
      arr[position] = arr[position+1];
      position++;
    }

    arr[position] = currValue;
  }
}