export type Position="start"|"end";

export interface CaseStudyInterface{
    title:string;
    image:string;
    heading:string;
    position:Position;
    listOfFeatures:string[];
}
