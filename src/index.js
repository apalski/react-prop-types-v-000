import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    const orderInfo = { customerName: 'Fred', orderedAt: 5 }
    return (
      <div className="order"></div>
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(',')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular',
  scoops: ['chocolate', 'vanilla', 'strawberry']
};

Order.PropTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape ({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  }).isRequired
};

ReactDom.render(
  <Order />,
  document.getElementById('root')
);
