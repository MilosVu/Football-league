import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {Team} from '../team.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  teams: Team[];

  constructor(private teamService: TeamService) {
    this.teams = this.teamService.teams;
  }

  ngOnInit() {
  }

}
