class Movement {
    id?: string;
    description: string;
    amount: number;
    categoryId: string;
    type: 'expense' | 'income';
    dateTime: Date;

    constructor (description: string, amount: number, categoryId: string, type: 'expense' | 'income', dateTime: Date, id?: string) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.categoryId = categoryId;
        this.type = type;
        this.dateTime = dateTime;
    }
};

export default Movement;