import { Component, OnInit } from '@angular/core';
import {TeamService} from '../teams/team.service';
import {Team} from '../teams/team.model';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.page.html',
  styleUrls: ['./standings.page.scss'],
})
export class StandingsPage implements OnInit {

  teams: Team[];

  constructor(private teamService: TeamService) {
    this.teams = this.teamService.teams;
  }

  ngOnInit() {
  }

}
