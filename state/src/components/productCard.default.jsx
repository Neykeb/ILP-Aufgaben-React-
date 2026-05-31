import { useState } from "react";

export function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [isFavorite, setFavorite] = useState(false);
  const [stock, setStock] = useState(product.initialStock);

  function handleIncrease() {
    if (stock > 0) {
      setQuantity((prev) => prev + 1);
      setStock(stock - 1);
    }
  }
  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
      setStock(stock + 1); // Logik-Entscheidung: Artikel wandert zurück ins Lager
    }
  }
  function favorite() {
    setFavorite(!isFavorite);
  }
  function handleRese() {
    setQuantity(0);
    setStock(product.initialStock); // Setzt den Bestand wieder auf den ursprünglichen Prop-Wert zurück
    setFavorite(false);
  }

  return (
    <>
      <section>
        <h2>{product.name}</h2>
        <p>Preis: {product.price}</p>
        <p>Kategorie: {product.category}</p>
        <p>Beschreibung: {product.description}</p>
      </section>
      <h1>{quantity}</h1>
      {/* Interaktions-Buttons */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button onClick={handleDecrease} disabled={quantity === 0}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrease} disabled={stock === 0}>
          +
        </button>
      </div>

      {/* Favoriten & Reset */}
      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <button onClick={() => setFavorite(!isFavorite)}>
          {isFavorite ? "❤️ Favorit" : "🤍 Merken"}
        </button>

        <button
          onClick={handleRese}
          style={{ backgroundColor: "#ff4d4d", color: "white" }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
