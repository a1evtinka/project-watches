const React = require('react');
const Layout = require('./Layout');
// const NavMenu = require('./navMenu');
const OrderCard = require('./OrderCard');

module.exports = function OrdersPage({ orders }) {
  return (
    <Layout>
      {/* <NavMenu></NavMenu> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Scetch (Link)</th>
            <th scope="col">Our Model</th>
          </tr>
        </thead>
        <tbody>
         {orders.map(order =><OrderCard key={order.id} order={order}/> )}
        </tbody>
      </table>
    </Layout>
  );
};
