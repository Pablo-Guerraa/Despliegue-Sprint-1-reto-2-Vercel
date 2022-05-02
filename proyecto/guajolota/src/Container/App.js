import { useContext } from "react";
import Main from "../Components/Main";
import ProviderTransitionPagThree from "../hooks/contextTransitionPagThree";
import ProviderTransitionPagTwo from "../hooks/ContextTransitionPagTwo";

function App() {

  return (
    <ProviderTransitionPagTwo>
      <ProviderTransitionPagThree>
        <Main/>
      </ProviderTransitionPagThree>
    </ProviderTransitionPagTwo>
  );
}

export default App;
