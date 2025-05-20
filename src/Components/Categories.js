import React from 'react';
import { Link } from 'react-router-dom';
const categories = [
  { title: 'South Indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYW58ZW58MHx8MHx8fDA%3D' },
  { title: 'Biryanis', image: 'https://images.pexels.com/photos/9609863/pexels-photo-9609863.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Chinese', image: 'https://images.pexels.com/photos/18803177/pexels-photo-18803177/free-photo-of-plate-with-greasy-momos-dumplings.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Desserts', image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const Categories = () => {
  return (
    <div className="container mt-5">
        <h2 className="text-center mb-4 mt-0">Explore Categories</h2>
        <div className="row">
          {categories.map((item, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="card shadow-sm h-100">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <Link to="/cart" className="btn btn-outline-dark btn-sm"> {item.title}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Categories;
