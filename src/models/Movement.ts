import Category from "./Category";

class Movement {
    id?: string;
    description: string;
    amount: number;
    category: Category;
    dateTime: Date;

    constructor (description: string, amount: number, category: Category, dateTime: Date, id?: string) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.category = category;
        this.dateTime = dateTime;
    }
};

export default Movement;