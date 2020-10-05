interface ITemplateVariobles {
    [key: string]: string | number
}
export default interface IParseMailTemplateProviderDTO {
    file: string;
    variables: ITemplateVariobles;
}
