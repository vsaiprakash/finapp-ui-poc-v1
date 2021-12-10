import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  filterDataTable( originalData: any, inputData :any[] ){
    let data = originalData;

    inputData.forEach(record => {
      if(record.value!=''){
        switch(record.type) {
          case "text":
            data = data.filter((entry: any) => {
              return (entry[record.key].includes(record.value));
            });
            break;
          case "select":
            data = data.filter((entry: any) => {
              return entry[record.key] === record.value;
            });
            break;
          default:
            console.log("NOT SUPPORTED TYPE");
        }
      }
    });

    return data;
  }
}
