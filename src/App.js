import ListShoe from "./ShoesShop/ListShoe";
import data from "./data/data.json"

function App() {
  return (
    <ListShoe arrProduct={data} />
  )
}

export default App;
