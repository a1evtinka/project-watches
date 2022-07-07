const React = require('react');

module.exports = function OrderCard({ order }) {
  return (
    <tr>
      <th scope="row">{order.id}</th>
      <td>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'}).format(order.createdAt)}</td>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.phone}</td>
      <td>{order.scetch}</td>
      <td>{order.Watch.title}</td>
      {/* <td>{user.Games.reduce((total, game) => total + game.score, 0)}</td> */}
    </tr>
  );
};
