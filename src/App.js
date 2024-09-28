import React, { useState } from 'react'
import ProductList from './ProductList'
import './App.css'

const products = [
  { name: 'Smartphone', category: 'Electronics', price: 321 },
  { name: 'Laptop', category: 'Electronics', price: 123 },
  { name: 'T-Shirt', category: 'Clothing', price: 221 },
  { name: 'Jeans', category: 'Clothing', price: 112 },
]

function App() {
  const [activeFilter, setActiveFilter] = useState('All')

  const handleFilterChange = (category) => {
    setActiveFilter(category)
  }

  const getFilteredProducts = () => {
    if (activeFilter === 'All') {
      return products
    }
    return products.filter((product) => product.category === activeFilter)
  }

  return (
    <div>
      <header>
        <h1>Product List</h1>
      </header>
      <section id="filter-section">
        <button
          className={'All' === activeFilter ? 'active' : ''}
          onClick={() => handleFilterChange('All')}
        >
          All
        </button>
        <button
          className={'Electronics' === activeFilter ? 'active' : ''}
          onClick={() => handleFilterChange('Electronics')}
        >
          Electronics
        </button>
        <button
          className={'Clothing' === activeFilter ? 'active' : ''}
          onClick={() => handleFilterChange('Clothing')}
        >
          Clothing
        </button>
      </section>
      <ProductList products={getFilteredProducts()} />
    </div>
  )
}

export default App
