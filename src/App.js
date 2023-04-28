import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error404 } from './pages/Error404';
import { Movie } from './pages/Movie';
import { NewMovies } from './pages/NewMovies';
import { PopularMovies } from './pages/PopularMovies';
import { SearchMovies } from './pages/SearchMovies';
import {Menu} from './components/Menu/Menu'



function App() {

  const { Header, Content } = Layout;


  return (
    <Layout>
      <Router>

        <Header>

          <Menu/>

        </Header>
        <Content>
          <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="*" element={<Error404/>} />
            <Route exact path="/movie/:id" element={<Movie/>} />
            <Route exact path="/newMovies" element={<NewMovies/>} />
            <Route exact path="/popularMovies" element={<PopularMovies/>} />
            <Route exact path="/searchMovies" element={<SearchMovies/>} />

          </Routes>


        </Content>

      </Router>


    </Layout>
  );
}

export default App;
