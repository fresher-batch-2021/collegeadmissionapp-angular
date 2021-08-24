import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchterm'
})
export class SearchPipe implements PipeTransform {

  transform(records: any[], searchBy: string): any {
    if (!records) return [];
    if (!searchBy) return records;
    console.log('Category Pipe:', searchBy);
    return records.filter(tableValue => {
      return tableValue.doc.branch.toLowerCase().indexOf(searchBy.toLocaleLowerCase()) != -1;
    });
  }
}
