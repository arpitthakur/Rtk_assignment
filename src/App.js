
import { BrowserRouter, useRoutes} from "react-router-dom";

import Carousels from "../src/Component/Carousels";
import ImageView from "../src/Component/ImageView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes/>
         
      </BrowserRouter>
    </div>
  );
}

export default App;


const Routes = () => {
	return useRoutes([
		{
			path: "/",
			element: <Carousels />,
		},
		{
			path: "/:id",
			element: <ImageView />,
		},
	
	]);
};
