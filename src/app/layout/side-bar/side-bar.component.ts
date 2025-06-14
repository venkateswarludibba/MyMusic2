import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() collapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    debugger
  }

   @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    if (width > 768 && this.collapsed) {
      this.collapsed = !this.collapsed;
    }
  }

}
