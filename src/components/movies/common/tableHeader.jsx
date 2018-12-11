import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort = path => {
    console.log(path);
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      console.log("Reverse");
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path || !column.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-up" />;
    else return <i className="fa fa-sort-down" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              style={{ cursor: "pointer" }}
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
