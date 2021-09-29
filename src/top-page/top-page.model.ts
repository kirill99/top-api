import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}

export class hhData {
    @prop()
    count: number;

    @prop()
    juniorSalary: number;

    @prop()
    middleSalary: number;

    @prop()
    seniorSalary: number;
}

export class TopPageAdvantage {
    @prop()
    title: string;

    @prop()
    description: string;
}

export interface TopePageModel extends Base { }
export class TopePageModel extends TimeStamps{

    @prop({enum: TopLevelCategory})
    firstLevelCategory: TopLevelCategory;

    @prop()
    secondCategory: string;

    @prop({unique: true})
    alias: string;

    @prop()
    title: string;

    @prop()
    category: string;

    @prop({ type: () => [hhData] })
    hh?: hhData;

    @prop({ type: () => [TopPageAdvantage]})
    advantages: TopPageAdvantage[];

    @prop()
    seoText: string;

    @prop()
    tagsTitle: string;

    @prop({ type: () => [String] })
    tags: string[];
}

