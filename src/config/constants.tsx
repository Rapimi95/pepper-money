export const PATHS = {
    movements: '/movimientos',
    addMovement: '/movimientos/crear',
    movementDetails: (id: string | null = null ) => id ? `/movimientos/${id}` : '/movimientos/:id',
    categories: '/categorias',
    addCategory: '/categorias/crear',
    categoryDetails: (id: string | null = null ) => id ? `/categorias/${id}` : '/categorias/:id',
    summary: '/resumen',
    budget: '/presupuesto',
};