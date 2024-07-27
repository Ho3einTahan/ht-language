export type ListType = {
    type: String,
    body: Array<any>,
};

// List Memory
export class MemoryList {

    private static instance: MemoryList;

    private constructor() { }

    public static getInstance(): MemoryList {

        if (!MemoryList.instance) MemoryList.instance = new MemoryList();

        return MemoryList.instance;

    }

    private memory: Record<string, ListType> = {};

    public get_BODY_OF_LIST(key: string) {
        return this.memory[key];
    }

    public isExist_NAME_OF_LIST(key: string) {
        return this.memory[key];
    }

    public define_LIST(key: string, value: ListType): void {
        // this.MemoryList['vLIST'] = value;
        this.memory[key] = value;
    }


    public define_FOR_ELELMENT_LIST(key: string, value: any): void {
        // this.MemoryList['elementLIST'] = value;
        this.memory[key] = value;
    }

    public remove_KEY_OF_ELEMENT_LIST() { }

    public isExist_ELEMENT_OF_LIST() { }

}