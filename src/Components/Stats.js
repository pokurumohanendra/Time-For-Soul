export default function Stats({ items }) {
  if (!items.length)
    return <em>StartAdding Some Items To Your Packing List </em>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Can Go Now ✈️🚶‍➡️"
          : `💼 you have ${numItems} items on your list, and you already packed 
        ${numPacked} items ${percentage}%`}
      </em>
    </footer>
  );
}
