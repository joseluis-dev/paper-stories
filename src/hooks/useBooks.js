import { getFetcher } from '@/services/fetcher'
import { useEffect } from 'react'
import { create } from 'zustand'


const useBookStore = create((set) => ({
  books: {},
  isLoading: false,
  error: null,
  addBook: (book, bookType) => {
    set((state) => ({ books: { ...state.books, [bookType]:book } }))
  },
  removeBook: (book, bookType) => {
    set((state) => ({
      books: { ...state.books, [bookType]: state.books[bookType].filter((b) => b.id !== book.id) },
    }))
  },
  loadBooks: async (query) => {
    const books = useBookStore.getState().books
    if (books[query]) {
      set({ isLoading: false })
      return
    }
    set({ isLoading: true })
    // console.warn('fetching...')
    try {
      const data = await getFetcher(`${import.meta.env.VITE_API_GOOGLE_URL}?q=${query}`)
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

export const useBooks = ({ query = '' } = { query: '' }) => {
  const { books, isLoading, error, addBook, removeBook, loadBooks } = useBookStore((state) => state)

  useEffect(() => {
    query && loadBooks(`${query}`)
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

const useSingleBookStore = create((set) => ({
  book: {},
  isLoading: false,
  error: null,
  addBook: (book) => {
    set({ book })
    // llamar a la api para guardar el libro
  },
  removeBook: () => {
    set({ book: {} })
    // llamar a la api para eliminar el libro
  },
  loadBook: async (id) => {
    set({ isLoading: true })
    try {
      const data = await getFetcher(`${import.meta.env.VITE_API_GOOGLE_URL}/${id}`)
      const dataFormated = {
        id: data.id,
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors,
        description: data.volumeInfo.description || 'No description',
        image: data.volumeInfo.imageLinks.large || data.volumeInfo.imageLinks.thumbnail,
        date: data.volumeInfo.publishedDate,
        price: parseFloat(data.saleInfo.retailPrice?.amount),
        rate: data.volumeInfo.averageRating || '-',
        publisher: data.volumeInfo.publisher,
        categories: data.volumeInfo.categories,
      }
      set({ book: dataFormated, isLoading: false })
    } catch (error) {
      set({ error, isLoading: false })
    }
  }
}))

export const useSingleBook = ({ id = '' }) => {
  const { book, isLoading, error, addBook, removeBook, loadBook } = useSingleBookStore((state) => state)

  useEffect(() => {
    loadBook(`${id}`)
  }, [loadBook, id])
  
  return { 
    book, 
    isLoading, 
    error, 
    addBook, 
    removeBook, 
    loadBook
  }
}