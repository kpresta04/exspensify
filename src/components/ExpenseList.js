import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/getVisibleExpenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(el => {
      return <ExpenseListItem key={el.id} {...el} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
