import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../teams/team.model';

@Component({
  selector: 'app-team-element-standing',
  templateUrl: './team-element-standing.component.html',
  styleUrls: ['./team-element-standing.component.scss'],
})
export class TeamElementStandingComponent implements OnInit {
  @Input() team: Team =
    {
      id: 1, name: 'Manchester City', played: 35, points: 80, won: 25, lost: 5, drawn: 5,
      imageUrl: 'https://resources.premierleague.com/premierleague/badges/t43.svg'
    };

  @Input() teams: Team[] = [
    {
      id: 1, name: 'Manchester City', played: 35, points: 80, won: 25, lost: 5, drawn: 5,
      imageUrl: 'https://resources.premierleague.com/premierleague/badges/t43.svg'
    },
    {
      id: 2, name: 'Manchester United', played: 36, points: 70, won: 20, lost: 6, drawn: 10,
      imageUrl: 'https://resources.premierleague.com/premierleague/badges/t1.svg'
    },
    {
      id: 3, name: 'Leicester City', played: 36, points: 66, won: 20, lost: 10, drawn: 6,
      imageUrl: 'https://resources.premierleague.com/premierleague/badges/t43.svg'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
