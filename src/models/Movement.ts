class Movement {
    id: string;
    description: string;
    amount: number;
    tag: string;
    type: 'expense' | 'income';
    dateTime: string;

    constructor ( id: string, description: string, amount: number, tag: string, type: 'expense' | 'income', dateTime: string) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.tag = tag;
        this.type = type;
        this.dateTime = dateTime;
    }
};

export default Movement;