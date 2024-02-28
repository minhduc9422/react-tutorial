import NavBar from "./components/NavBar";
import CartList from "./components/CartList";
import FooterCart from "./components/FooterCard";
import { useState } from "react";
import cartList from "./service/cart";

function App() {
  const { carts, setCarts } = useState(cartList);

  return (
    <main>
      <NavBar />

      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>

        <CartList carts={carts} />

        <FooterCart />
      </section>
    </main>
  );
}
export default App;
