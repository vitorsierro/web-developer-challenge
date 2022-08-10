import Header from '../components/Header/Header';
import BoxEscrever from '../components/BoxEscrever/BoxEscrever';
import styled from '../styles/home.module.css';
import Posts from '../components/Posts/Posts';
function App() {
     return (
    <div className={styled.Container}>
   <Header />
   <BoxEscrever />
   <div className={styled.PostsCentralize}>
    <h2>Feed</h2>
     </div>
    <Posts />
   
   </div>
  );
}

export default App;
