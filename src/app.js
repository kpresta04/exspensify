import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/getVisibleExpenses";

import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  setEndDate,
  setStartDate,
  setSortBy
} from "./actions/filters";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 500 }));
store.dispatch(addExpense({ description: "gas bill", amount: 4500 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 1500, createdAt: 1000 })
);

// store.dispatch(setTextFilter("gas"));
const state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#app"));
