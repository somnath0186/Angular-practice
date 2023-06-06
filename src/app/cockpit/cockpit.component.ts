import { Component, OnInit ,Input, EventEmitter,Output, ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>()
  @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>()
  // serverElements = [{type:'server',name:'Testserver',content:'just a test server'}];

  // newServerName ='somnath';
  // newServerContent = 'jagale';
         @ViewChild('serverContentInput',{static :true}) serverContentInput:ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }
   
  onAddServer(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName:nameInput.value ,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput)
    this.bluePrintCreated.emit({
    
      serverName:nameInput.value ,
      serverContent: this.serverContentInput.nativeElement.value

    });
  }
}
