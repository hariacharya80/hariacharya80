import Book from "../components/Book";
import NewBook from "../components/NewBook";

function Reading() {
  return (
    <div className="mt-[5vh]">
      <h1 className="font-bold text-3xl">Join me in the wishdom of books!</h1>
      <p className="text-gray-500 mb-4">
        I'm a software engineer and I'm passionate about learning new things
        that are not just limited to tech but about life and that of my genre. I
        love to learn new things. Find my reading list or suggest me something
        new to read. <span className="text-green-700">Green</span> represents
        books that I have completed reading,{" "}
        <span className="text-red-500">red</span> represents that I'm still
        reading the book whereas no colors represents the books that have been
        suggested but I haven't actually read it yet.
      </p>
      <div className="grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 grid">
        <Book
          image="/images/rdpd.jpeg"
          status={"done"}
          name="Rich Dad Poor Dad"
        />
        <Book
          image="/images/atomichabits.png"
          status={"reading"}
          name="Atomic Habits"
        />

        <NewBook />
      </div>
    </div>
  );
}

export default Reading;
