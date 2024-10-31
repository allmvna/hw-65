export interface IContent{
    id: string | undefined;
    title: string;
    content: string;
}

export interface IContentAPI {
    [id: string]: IContent;
    title: string;
    content: string;
}
