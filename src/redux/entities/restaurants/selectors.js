const selectRestaurantModule = (state) => state.restaurant;

const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

const selectRastaurant = (state, id) => selectRestaurantModule(state).entities[id];

export {selectRestaurantModule, selectRestaurantIds, selectRastaurant};
