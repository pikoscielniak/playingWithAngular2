/**
 * Created by piotr on 5/9/15.
 */
export interface IFamousPainter {
    name:string;
    style:string;
    examples: Array<string>;
}

export interface IFamousPainterResponse {
    famousPainters: Array<any>
}
