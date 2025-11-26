export interface MultimediaObj{
    name: string;
    image: string;
}

export enum Status {
    CONCLUDED, ONGOING
}

export interface TimelineEvent {
    status: Status;
    date: string;
    icon: string;
    color: string;
    title: string;
    author: string;
    description: string;
    link?: string;
}