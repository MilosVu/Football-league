import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from './team.model';

interface TeamData{
  id: number;
  name: string;
  played: number;
  points: number;
  won: number;
  lost: number;
  drawn: number;
}

@Injectable({
  providedIn: 'root'
})

export class TeamService{

  teams: Team[] = [
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
      imageUrl: 'https://resources.premierleague.com/premierleague/badges/t13.svg'
    }
  ];


  constructor(private http: HttpClient) {
  }

  addTeam(id: number, name: string, played: number, points: number, won: number, lost: number, drawn: number){
    return this.http.post<{name: string}>
    ('https://football-app-mobilno-default-rtdb.europe-west1.firebasedatabase.app/teams.json',
      {id, name, played, points, won, lost, drawn});
  }

  getTeams(){
    this.http.get<{[key: string]: TeamData}>
      ('https://football-app-mobilno-default-rtdb.europe-west1.firebasedatabase.app/teams.json');
  }

}
