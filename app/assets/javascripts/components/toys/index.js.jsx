/* global React, ToysIndexItem */

(function(root) {
  'use strict';
  root.ToysIndex = React.createClass({
    render: function () {
      if (this.props.toys) {
        return (
          <ul>
            {this.props.toys.map(function (toy) {
                return <ToysIndexItem toy={toy}/>;
            })}
          </ul>
        );
      } else {
        return <div></div>;
      }
    }
  });
}(this));
