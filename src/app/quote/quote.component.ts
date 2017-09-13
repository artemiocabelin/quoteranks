import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote;
  @Output() quotesArrayEmitter = new EventEmitter();
  constructor() { }

  onSubmit() {
    console.log('submitted')
    this.quotesArrayEmitter.emit(this.quote);
    this.quote = new Quote();
  }

  ngOnInit() {
    this.quote = new Quote();
  }

}

