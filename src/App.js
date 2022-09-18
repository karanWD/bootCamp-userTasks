import './App.css';
import AlertContextProvider from "./contexts/alertContext";
import TaskManager from "./components/taskManager/TaskManager";

function App() {
    return (
        <div className="App">
            <AlertContextProvider>
                <TaskManager/>
            </AlertContextProvider>
        </div>
    )

}

export default App;
