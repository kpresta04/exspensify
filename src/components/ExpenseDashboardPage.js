import React from "react";
import ExpenseList from "./ExpenseList";
import { connect } from "react-redux";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
