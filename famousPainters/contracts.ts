/**
 * Created by piotr on 5/9/15.
 */
export interface IFamousPainter {
    name:string;
    style:string;
    examples: IPainterExample[];
}

export interface IPainterExample {
    name:string;
}
