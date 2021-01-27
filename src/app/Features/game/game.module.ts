import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { GameRoutingModule } from '@app/Features/game/game-routing.module';
import { GameComponent } from '@app/Features/game/game.component';
import { Colordirective } from '@app/Directives/Color.directive';

@NgModule({
  imports: [CommonModule, TranslateModule, GameRoutingModule],
  declarations: [GameComponent, Colordirective],
})
export class GameModule {}
