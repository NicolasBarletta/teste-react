import Header from "./components/header"
import {Global} from "./styles/global"
function App() {
  return (
    <> {/* fragment, tag que não tem conteudo e não tem estilo */}
    <Global/>
     <Header/>
    </>
  );
}

export default App;
