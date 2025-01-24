const BookOverview = ({title, author, genre, rating,totalCopies,availableCopies, description, coverUrl} : Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default BookOverview;
