export enum Lines {
    MACBOOK,
    THINKPAD,
    SOFTWARE,
    MINI_PC
}

export interface ILine {
    id: Lines;
    title: string;
}

export const lines: ILine[] = [
    {
        id: Lines.MACBOOK,
        title: 'macbook'
    },
    {
        id: Lines.THINKPAD,
        title: 'thinkpad'
    },
    {
        id: Lines.MINI_PC,
        title: 'mini pc'
    },
    {
        id: Lines.SOFTWARE,
        title: 'software'
    }
];
