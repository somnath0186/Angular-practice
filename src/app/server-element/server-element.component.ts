import { Component, Input, OnInit,SimpleChange,OnChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,DoCheck {
  @Input("srcElement") element:{ type: string,name: string,content: string}
 @Input('name') name: string
  constructor() { 
    console.log('constructor called')
  }
  ngOnChanges(changes: SimpleChange){
    console.log('ngOnChanges called')
    console.log(changes)
  }
  ngOnInit(): void {
    console.log('ngOnInit called')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
    
}
  ngAfterContentChecked(): void {
    console.log('ngAfterContentInit called')
    
}
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
    
}
  ngAfterViewChecked(): void {
    console.log(' ngAfterViewChecked called')
    
}
ngOnDestroyFirst(){

}
}