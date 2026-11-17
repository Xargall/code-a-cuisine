import { Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  imports: [Hero],
  selector: 'app-landing',
  styleUrl: './landing.scss',
  templateUrl: './landing.html',
})
export class Landing {}
