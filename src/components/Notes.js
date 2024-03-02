export function Notes({ notes }) {
  return (
    <div className="notes">
      <h2> Notes </h2>
      <form>
        <textarea rows={30}
          placeholder="Write Notes Here"
          value={notes} />
      </form>
    </div>
  );

}
