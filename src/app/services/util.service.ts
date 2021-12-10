import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  filterDataTable( originalData: any[], inputData :any[] ){
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

  sortDataTable( originalData: any[], inputData: any ) {
    let data = originalData;

    switch(inputData.type) {
      case "number":
        switch(inputData.option) {
          case "":
          case null:
          case "asc":
            data.sort((a,b)=>{
              return (a[inputData.key] - b[inputData.key]);
            });
            break;
          case "desc":
            data.sort((a,b)=>{
              return (b[inputData.key] - a[inputData.key]);
            });
            break;
          default:
            console.log("UNSUPPORTED OPTION");
        }
        break;
      case "string":
        switch(inputData.option) {
          case "":
          case null:
          case "asc":
            data.sort((a,b)=>{
              return a[inputData.key].localeCompare(b[inputData.key]);
            });
            break;
          case "desc":
            data.sort((a,b)=>{
              return b[inputData.key].localeCompare(a[inputData.key]);
            });
            break;
          default:
            console.log("UNSUPPORTED OPTION");
        }
        break;
      default:
        console.log("NOT SUPPORTED TYPE");
    }

    return data;
  }
}
