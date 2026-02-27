import "./App.css";
import Multistep from "./assets/features/step/Multistep";
import FormProvider from "./shared/context/FormContext";

function App() {
  return (
    <FormProvider>
      <Multistep />
    </FormProvider>
  );
}

export default App;
