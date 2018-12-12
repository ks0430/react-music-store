import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    // link to title
    const itemTitle = _.get(item, column.path);

    if (column.path === "title") {
      console.log(item[column.path]);
      return <Link to={`movies/${item._id}`}>{itemTitle}</Link>;
    }

    return itemTitle;
  };

  createKey = (item, column) => {
    return item._id + (column.path + column.key);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
