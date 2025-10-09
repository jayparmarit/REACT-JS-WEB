// import Usestate from "./hooks/Usestate";

import OnClick from "./event/onClick";
import OnChange from "./event/OnChange";
import OnSubmit from "./event/OnSubmit";

// import ObjectUseState from "./hooks/ObjectState"
// import UseEffect from "./hooks/lifeCycle"
// import { useState } from "react";
// import UseEffect from "./hooks/UseEffect"

const App = () =>{

    // const [show,setShow] = useState(true)

  return(
    <>

      {/* <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"}{" "}
      </button> */}

       {/* {show && <LifeCycle />} */}

        {/* <Usestate/> */}
        {/* <ObjectUseState/>  */}
        {/* <lifeCycle/> */}
        {/* <UseEffect/> */}
        {/* <OnClick/> 
        <OnChange/> */}
        <OnSubmit/>
    </>
  )
}

export default App;
