interface ITemplateVariobles {
    [key: string]: string | number
}
export default interface IParseMailTemplateProviderDTO {
    template: string;
    variables: ITemplateVariobles;
}
