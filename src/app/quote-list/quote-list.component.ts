import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit, OnChanges {
  @Input() myQuotes: Quote[];
  @Output() deleteQCommandEmitter = new EventEmitter();
  @Output() sortCommandEmitter = new EventEmitter();
  constructor() { }

  voteUp(index) {
    console.log(index);
    console.log('up')
    this.myQuotes[index].votes ++;
    this.sortCommandEmitter.emit();
  }
  voteDown(index) {
    console.log(index);
    console.log('down')
    this.myQuotes[index].votes --;
    this.sortCommandEmitter.emit();
  }

  deleteQuote(index) {
    console.log('emit deleting');
    this.deleteQCommandEmitter.emit(index);
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    console.log('got quotes on list')
    console.log(this.myQuotes);
  }

}
