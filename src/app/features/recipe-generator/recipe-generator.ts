import { Component } from '@angular/core';
import { RouterOutlet } from '../../../../node_modules/@angular/router/types/_router_module-chunk';

@Component({
  imports: [RouterOutlet],
  selector: 'app-recipe-generator',
  styleUrl: './recipe-generator.scss',
  templateUrl: './recipe-generator.html',
})
export class RecipeGenerator {}
