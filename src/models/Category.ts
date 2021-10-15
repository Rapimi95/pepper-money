class Category {
    id?: string;
    description: string;
    type: 'expense' | 'income';
    budget: number;

    constructor ( description: string, type: 'expense' | 'income', budget: number, id?: string) {
        this.id = id;
        this.description = description;
        this.type = type;
        this.budget = budget; 
    }
};

export default Category;