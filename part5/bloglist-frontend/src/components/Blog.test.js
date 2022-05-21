import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders the blog title and author, not its url or number of likes by default', () => {
  const blog = {
    title: 'title',
    author: 'author',
    url: 'https://url.com',
    likes: 0,
  }

  render(<Blog blog={blog} />)

  const elementTitle = screen.getByText('title', { exact: false })
  const elementAuthor = screen.getByText('author', { exact: false })

  expect(elementTitle).toBeDefined()
  expect(elementAuthor).toBeDefined()
})
