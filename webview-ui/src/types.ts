export interface OptionCheckBox {
    checked?: boolean,
    label: string,
    tooltip: string
}

export interface FileType {
	file: string;
	name: string;
	color: string;
	lang?: boolean;
	groupWith?: string;
}

export interface Directory {
    type: string;
    name: string;
    children?: Directory[];
}