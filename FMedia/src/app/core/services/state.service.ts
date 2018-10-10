import { Injectable } from '@angular/core';

import { DisplayModeMasterEnum } from '../../shared/enums';

@Injectable()
export class StateService {
    public displayModeMovies: DisplayModeMasterEnum;

    constructor() {
      this.displayModeMovies = DisplayModeMasterEnum.Card;
    }
}
