import CounterReducer from "./CounterReducer";

function App() {
    return (
        <div className="App">
            <CounterReducer />
        </div>
    );
}

export default App;

/*

-- Parameters --

function reducer(state, action) {
    // MUST BE PURE
    // MUST RETURN THE NEXT STATE
    // STATE AND ACTION CAN BE OF ANY TYPE
    // ...
}

* reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.

* initialArg: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.

* optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).

-- Returns --

useReducer returns an array with exactly two values:

* The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).

* The dispatch function that lets you update the state to a different value and trigger a re-render.

const [state, dispatch] = useReducer(reducer, initialArg, init?);

-- dispatch() ---

The dispatch function takes in the action that is then passed down to the reducer function.

* action: The action performed by the user. It can be a value of any type. By convention, an action is usually an object with a type property identifying it and, optionally, other properties with additional information.

The dispatch function only updates the state variable for the next render. If you read the state varialb after calling hte dispatch function, you will still get the old value what was on the screen before you call.
React doesn't re-render if the state provided is not different from the current state.
*/
