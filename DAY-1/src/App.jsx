// import Jsx from "./Jsx";
import State from "./State";
// import PrevState from "./PrevState"
import Props from "./Props"

function App(){
    return(
            <>
              {/* <h1>hellwo</h1>
                <Jsx/> */}
                <State/>
                {/* <PrevState/> */}
                <Props greeting={"good morning"}/>
            </>
    )
}

export default App