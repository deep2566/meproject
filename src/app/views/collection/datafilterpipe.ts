import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
     
      var e = document.getElementById("searchDashboard") as HTMLSelectElement;
      var search_by = e.options[e.selectedIndex].value;     

      switch(search_by) {
        case 'client':
          return _.filter(array, row => row.client_name.indexOf(query) > -1)
          break;
        case 'debtor':
          return _.filter(array, row => row.debtor_name.indexOf(query) > -1)
          break;
        case 'amount':
          return _.filter(array, row => row.amount == query)
          break;
        default:
          return _.filter(array, row => row.collector_name.indexOf(query) > -1)
      }
    }
    return array;
  }
}
