export const Dish = ({ id, tittel, pris, ingredienser, kategori }) => {
  return (
    <div className="matkort">
      <p>
        <span style={{ fontWeight: "bold" }}>Id:</span> {id}
      </p>
      <h1>{tittel}</h1>
      <p>
        <span style={{ fontWeight: "bold" }}>Pris:</span> {pris}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Ingredienser:</span> {ingredienser}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Kategori:</span> {kategori}
      </p>
    </div>
  );
};
