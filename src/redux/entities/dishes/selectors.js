const selectDishModule = (state) => state.dish;

const selectDishIds = (state) => selectDishModule(state).ids;

const selectDish = (state, id) => selectDishModule(state).entities[id];

export { selectDishModule, selectDish, selectDishIds };
