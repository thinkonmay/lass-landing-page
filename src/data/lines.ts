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
        title: 'Macbook'
    },
    {
        id: Lines.THINKPAD,
        title: 'Thinkpad'
    },
    {
        id: Lines.MINI_PC,
        title: 'Mini pc'
    },
    {
        id: Lines.SOFTWARE,
        title: 'Software'
    }
];
