import { getFetcher } from '@/services/fetcher'
import { useEffect } from 'react'
import { create } from 'zustand'


export const useBookStore = create((set) => ({
  books: {},
  isLoading: false,
  error: null,
  addBook: (book, bookType) => {
    set((state) => ({ books: { ...state.books, [bookType]:book } }))
    // llamar a la api para guardar el libro
  },
  removeBook: (book, bookType) => {
    set((state) => ({
      books: { ...state.books, [bookType]: state.books[bookType].filter((b) => b.id !== book.id) },
    }))
    // llamar a la api para eliminar el libro
  },
  loadBooks: async (query) => {
    set({ isLoading: true })
    try {
      const data = await getFetcher(`${import.meta.env.VITE_API_GOOGLE_URL}=${query}`)
      console.log(data)
      const dataFormated = data.items.map((book) => ({
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        date: book.volumeInfo.publishedDate,
        price: book.saleInfo.retailPrice?.amount,
        rate: book.volumeInfo.averageRating || '-',
      }))
      set((state) => ({ books: { ...state.books, [query]: dataFormated }, isLoading: false }))
    } catch (error) {
      set({ error, isLoading: false })
    }
  }
}))

export const useBooks = ({ query = '' } = { query: 'bestsellers' }) => {
  const { books, isLoading, error, addBook, removeBook, loadBooks } = useBookStore((state) => state)

  useEffect(() => {
    loadBooks(`${query}`)
  }, [loadBooks, query])
  
  return { 
    books, 
    isLoading, 
    error, 
    addBook, 
    removeBook, 
    loadBooks
  }
}