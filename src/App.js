// import Tab from './component/Tab';
// import Stop from './stopwatch/Stop';
// import Timer from './timer/Timer';
// import Weather from './weather/Weather';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import Count from './counter/Count';
//import counter from './redux/counter';
import Todo from './todo/Todo';
import todo from './redux/todo';

function App() {
  const store = createStore(todo);

  return (
    <div className="App">
      <Provider store={store}>
        <Todo />
      </Provider>
      
    </div>
  );
}

export default App;
