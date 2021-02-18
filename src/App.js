// import Tab from './component/Tab';
// import Stop from './stopwatch/Stop';
// import Timer from './timer/Timer';
// import Weather from './weather/Weather';
//import Count from './counter/Count';
//import counter from './redux/counter';
import Todo2 from './todo2/Todo2';
import todoLast from './redux/todoLast';
import { createStore } from 'redux';
import { Provider } from "react-redux";


function App() {

  const store = createStore(todoLast);
  

  return (
    <div className="App">
      <Provider store={store}>
        <Todo2 />
      </Provider>
    </div>
  );
}

export default App;
