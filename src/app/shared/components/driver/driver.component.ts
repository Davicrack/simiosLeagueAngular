import { Component } from '@angular/core';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {
  
  constructor() { }

  ngAfterViewInit(): void {
    this.countParagraphs();
  }

  countParagraphs() {
    const card = document.getElementsByClassName("card")[0] as HTMLElement;
    const container = document.getElementById("container") as HTMLElement;
    
    const height = container.offsetHeight;
    const width = container.offsetWidth;

    if(container instanceof HTMLElement){
      //alert(height);
     //alert(width);
    }
    card.style.height = height*0.8+"px";
    
    if (card instanceof HTMLElement) {
      const paragraphs = card.querySelectorAll('p');

     card.style.width = height/4.5*paragraphs.length+ "px";
     alert(height/4.5+ "px");
    }
  }
}
