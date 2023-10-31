import HomePage from "@/components/Home";
import { Counter } from "@/components/counter/Counter";
import Navbrar from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <div>
      <Navbrar/>
      <h1>Hello World!</h1>
      <HomePage/>
      <Counter/>
    </div>

  );
}
