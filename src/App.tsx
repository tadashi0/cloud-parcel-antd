import { BrowserRouter as Router, Link, Navigate, Outlet, Route, Routes, useRoutes } from 'react-router-dom'
import Example from './pages/Example';
import ExampleUseCallback from './pages/ExampleUseCallback';
import ExampleUseContext from './pages/ExampleUseContext';
import ExampleUseImperativeHandle from './pages/ExampleUseImperativeHandle';
import ExampleUseMemo from './pages/ExampleUseMemo';
import ExampleUseReducer from './pages/ExampleUseReducer';
import ExampleUseRef from './pages/ExampleUseRef';

const AppTemp: React.FC<any> = () => {
  return useRoutes([
    {
      path: '/',
      element: < Navigate to='app' replace />
    },
    {
      path: 'app',
      element: <><Example title='这是一个标题吗?' /><Outlet /></>,
      children: [
        { path: 'useMemo/:id', element: <ExampleUseMemo value={1} /> },
        { path: 'useCallback/:id', element: <ExampleUseCallback value={2} /> },
        { path: 'useImperativeHandle', element: <ExampleUseImperativeHandle /> },
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
}

const NotFound = () => {
  return <div>你来到了没有知识的荒原</div>
}

const App: React.FC<any> = () => {
  return (
    <Router >
      <ul>
        <li>
          <Link to="app">app</Link>
        </li>
        <li>
          <Link to="app/useMemo/123">useMemo</Link>
        </li>
        <li>
          <Link to="app/useCallback/456">useCallback</Link>
        </li>
        <li>
          <Link to="app/useImperativeHandle">useImperativeHandle</Link>
        </li>
        <li>
          <Link to="app/useRef">useRef</Link>
        </li>
        <li>
          <Link to="app/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="app/useContext">useContext</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path=''
          element={<Navigate to='app' replace />}
        />
        <Route path='app' element={<><Example title='这是一个标题吗?' /><Outlet /></>}>
          {/* <Route index element={<ExampleUseReducer />} /> //*默认渲染 */}
          <Route path='useMemo/:id' element={<ExampleUseMemo value={1} />} />
          <Route path='useCallback/:id' element={<ExampleUseCallback value={2} />} />
          <Route path='useImperativeHandle' element={<ExampleUseImperativeHandle />} />
          <Route path='useRef' element={<ExampleUseRef />} />
          <Route path='useReducer' element={<ExampleUseReducer />} />
          <Route path='useContext' element={<ExampleUseContext />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;