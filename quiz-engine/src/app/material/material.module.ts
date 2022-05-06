import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

const materials = [MatCardModule, FormsModule, MatRadioModule, MatSliderModule, MatButtonModule,MatToolbarModule, MatInputModule, MatGridListModule,MatTabsModule];



@NgModule({
  exports: [materials],
  imports: [materials],
})
export class MaterialModule {}
