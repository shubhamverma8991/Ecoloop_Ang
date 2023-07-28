import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
person:any=[
  {
    "name": "B Hari Kishore Rao",
    "position": "Director - Ecoloop",
    "msg": "B.E. Mechatronics, with 14+ years of experience in Electronics Product Design, Assembly, and Development. Expertise in mechatronics drives innovation and strategic vision. Core Strength in development of hardware/ backend development and meticulous approach towards project execution."
  },
  {
    "name": "R Shivram",
    "position": "Director - Ecoloop",
    "msg": "IIM Raipur Alumni , B.E Electronic with 25+ years of experience in Process Automation, Concept Design, and Energy Conservation projects. Expertise in Process Control and Optimisation. Industrial exposure and understanding of different processes helps in identifying the concerns, losses and defects and designing optimised/ customised solution."
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
