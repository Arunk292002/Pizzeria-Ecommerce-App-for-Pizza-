import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "join",
})
export class JoinPipe implements PipeTransform {

  public transform( value: any[], key: string, seperator: string = ", "): unknown {
    if (!value) { return; }
    return value.map((t) => t[key]).join(seperator);
  }

}
