import React, { useRef } from 'react';
import './category.css'; 

const category = [
    { id: 1, name: 'Food', image: '/image/food.jpg', path: '/category/food' },
    { id: 2, name: 'Animal', image: '/image/animal.jpg', path: '/category/animal' },
    { id: 3, name: 'Car', image: '/image/car.jpg', path: '/category/car' },
    { id: 4, name: 'Sport', image: '/image/sport.jpg', path: '/category/sport' },
    { id: 5, name: 'Music', image: '/image/music.jpg', path: '/category/music' },
    { id: 6, name: 'Technology', image: '/image/technology.jpg', path: '/category/technology' },
    { id: 7, name: 'Abstract', image: '/image/abstract.jpg', path: '/category/abstract' },
    { id: 8, name: 'College', image :'/image/college.jpg', path: '/category/college' },
];


function CategoryList() {
  const scrollerRef = useRef(null);

  // Fungsi untuk menggeser container
  const scroll = (direction) => {
    const scrollAmount = 300; 
    if (scrollerRef.current) {
      if (direction === 'left') {
        scrollerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="category-container"> 
      <button className="scroll-button left" onClick={() => scroll('left')}> 
        &lt;
      </button>
      <button className="scroll-button right" onClick={() => scroll('right')}>
        &gt;
      </button>
      
      <div className="category-scroller" ref={scrollerRef}>
        {category.map((cat) => ( 
          <a 
            key={cat.id} 
            href={cat.path} 
            className="category-tag"
            style={{ backgroundImage: `url(${cat.image})` }}
          >
            <div className="tag-overlay"></div>
            <span>#{cat.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;