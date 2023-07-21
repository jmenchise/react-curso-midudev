
export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
   ADD_TO_CART: 'ADD_TO_CART',
   REMOVE_FROM_CART: 'REMOVE_FROM_CART',
   CLEAR_CART: 'CLEAR_CART'
};

const updateLocalStorage = state => localStorage.setItem('cart', JSON.stringify(state));

const UPDATE_STATE_BY_ACTION = {
   [CART_ACTION_TYPES.ADD_TO_CART]: (state, payload) => {
      const productInCartIndex = state.findIndex(item => item.id === payload.id);
      if (productInCartIndex >= 0) {
         // la función structuredClone hace una copia profunda de arrays y objetos.O sea estamos copiando el array
         // const newState = structuredClone(state);
         // newState[productInCartIndex].count = newState[productInCartIndex].count + 1;
         // return newState;
         const newState = state.map(item => {
            if (item.id === payload.id) {
               return {
                  ...item,
                  count: item.count + 1
               };
            }
            return item;
         });
         updateLocalStorage(newState);
         return newState;
      };

      const newState = [...state, { ...payload, count: 1 }];
      updateLocalStorage(newState);
      return newState;
   },

   [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, payload) => {
      const newState = state.filter(item => item.id !== payload.id);
      updateLocalStorage(newState);
      return newState;
   },

   [CART_ACTION_TYPES.CLEAR_CART]: () => {
      updateLocalStorage([]);
      return [];
   }
}

export const cartReducer = (state, { type, payload }) => {

   const updateState = UPDATE_STATE_BY_ACTION[type];
   return updateState ? updateState(state, payload) : state;
}




