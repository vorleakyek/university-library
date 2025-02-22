import Link from "next/link";
import BookCover from "./BookCover";

const BookCard = ({ id, title, genre, coverColor, coverUrl, isLoanedBook = false}: Book) =>  <li>
  <Link href={`/books/${id}`}>
    <BookCover coverColor={coverColor} coverImage={coverUrl}/>
  </Link>
</li>

export default BookCard;
