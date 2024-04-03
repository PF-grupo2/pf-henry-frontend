import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pagesToShow = 5; // Máximo de botones numerados mostrados

  // Función para generar los números de página a mostrar
  const generatePageNumbers = () => {
    const pages = [];
    let startPage = 1;
    if (totalPages > pagesToShow) {
      startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
      const endPage = Math.min(startPage + pagesToShow - 1, totalPages);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    return pages;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {/* Botón "Anterior" */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Anterior
          </button>
        </li>
        {/* Botones numerados */}
        {generatePageNumbers().map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        {/* Botón "Siguiente" */}
        <li
          className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
