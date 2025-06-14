import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

   sidebarCollapsed = false;



  constructor() { }

  ngOnInit(): void {
  }

    toggleSidebar() {
      debugger
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      const width = event.target.innerWidth;
      if (width > 768 && this.sidebarCollapsed) {
        this.sidebarCollapsed = !this.sidebarCollapsed;
      }
    }
}
