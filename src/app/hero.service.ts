import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
/**
 * HeroService 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。
 */
export class HeroService {

  constructor() {
  }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
