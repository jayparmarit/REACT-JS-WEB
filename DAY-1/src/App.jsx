// import Jsx from "./Jsx";
import State from "./State";
// import PrevState from "./PrevState"
import Props from "./Props"

import { ClassComponent, FunctionalComponent } from "./components";
import { Component } from "react";

function App(){
    return(
            <>
              {/* <h1>hellwo</h1>
                <Jsx/> */}
                {/* <State/> */}
                {/* <PrevState/> */}
                {/* <Props greeting={"good morning"}/> */}

                <ClassComponent/>
                <FunctionalComponent/>
            </>
    )
}

export default App