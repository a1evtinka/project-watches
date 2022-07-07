const React = require('react');
const Layout = require('./Layout');

module.exports = function EntriesList({ watches, user }) {
  return (
    <Layout user={user}>
      {/* <a href="/watches/new" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Добавить часы</a> */}
      {/* <main role="main"> */}
      {/*   <ul className="entries-list no-bullets no-padding"> */}
      {/*     {watch.map((watch) => ( */}
      {/*       <li className="entry-item pad-b-4" key={watch.id}> */}
      {/*         <a href={`/entries/${watch.id}`} className="entry-title font-2 pad-b-1-4 c-white">{watch.title}</a> */}
      {/*         /!* <span className="entry-date block font-3-4 c-lt-gray">Written on {watch.createdAt.toString()}</span> *!/ */}
      {/*         /!* <p className="entry-stub">{watch.body}</p> *!/ */}
      {/*       </li> */}
      {/*     ))} */}
      {/*   </ul> */}
      {/* </main> */}
    </Layout>
  );
};
