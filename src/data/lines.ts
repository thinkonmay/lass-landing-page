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
        title: 'Cloud PC'
    },
    {
        id: Lines.SOFTWARE,
        title: 'Bản quyền phần mềm'
    }
];
