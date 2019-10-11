import { Component, OnInit } from '@angular/core';
import { SeasonService, Iseason, Iepisode } from '../season.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-dependent',
  templateUrl: './dependent.component.html',
  styleUrls: ['./dependent.component.less']
})
export class DependentComponent implements OnInit {
  seasons$: Observable<Iseason[]>;
  episodes$: Observable<Iepisode[]>;
  constructor(
    private seasonService: SeasonService,
    public controlContainer: ControlContainer
  ) { }

  ngOnInit() {
    this.seasons$ = this.seasonService.getSeasons();
    let seasonCtrl = this.controlContainer.control.get('favorite_season');
    this.episodes$ = seasonCtrl.valueChanges.pipe(
      mergeMap((seasonId: number) => {
        return this.seasonService.getSeasonEpisodes(seasonId);
      })
    )
  }

}
