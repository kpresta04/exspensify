import React from "react";
import ExpenseList from "./ExpenseList";
import { connect } from "react-redux";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
