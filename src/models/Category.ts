class Category {
    id?: string;
    description: string;

    constructor ( description: string, id?: string) {
        this.id = id;
        this.description = description;
    }
};

export default Category;