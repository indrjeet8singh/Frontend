import axios from 'axios';
import { useEffect, useState } from 'react';
import { backendurl } from '../../Servicepage';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

function FeedbackList() {
  const [feed, setFeed] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    axios.get(`${backendurl}/allfeedback`)
      .then((response) => {
        setFeed(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedback:', error);
      });
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = feed.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(feed.length / itemsPerPage);

  return (
    <div className="container mt-4">
      <h1>User Feedback</h1>
      {currentItems.length > 0 ? (
        currentItems.map((d) => (
          <div key={d.id} className="mb-3 border p-3 rounded">
            <h3>Username: {d.username}</h3>
            <h4>Email: {d.email}</h4>
            <h5>{d.subject}</h5>
            <div className='h-75'>
            <p>Message: {d.message}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No feedback available.</p>
      )}
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button
                className="page-link"
                onClick={() => paginate(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default FeedbackList;
