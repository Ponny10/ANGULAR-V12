import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',
  standalone: true
})
export class OrderListPipe implements PipeTransform {

  transform(value: any[], args: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      if (args === null) {
        return value;
      } else {
        const tempList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1;
          } else if(a[args] === b[args]) {
            return 0;
          } else {
            return 1;
          }
        })

        return (sort === 'asc') ? tempList : tempList.reverse();
      }
    } catch (e) {
      return value;
    }
  }

}
