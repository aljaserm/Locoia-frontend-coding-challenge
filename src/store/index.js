import { createStore } from 'vuex';

// Create and configure the Vuex store
export default createStore({
  state: {
    winners: JSON.parse(localStorage.getItem('winners')) || [], // Load winners from localStorage
  },
  mutations: {
    /**
     * Add a winner to the list.
     * @param {Object} state - The Vuex state.
     * @param {string} name - The name of the winner.
     */
    addWinner(state, name) {
      const normalizedName = name.trim().toLowerCase();
      if (!state.winners.includes(normalizedName)) {
        state.winners.push(normalizedName);
        localStorage.setItem('winners', JSON.stringify(state.winners)); // Save winners to localStorage
      }
    },
    /**
     * Clear the winners list.
     * @param {Object} state - The Vuex state.
     */
    clearWinners(state) {
      state.winners = [];
      localStorage.setItem('winners', JSON.stringify(state.winners)); // Clear winners in localStorage
    }
  },
});
