interface Args {
  book: BookInput
}

export const newBook = (_: any, {book}: Args, {dataSources: {database}}: Context) => database.newBook(book)
