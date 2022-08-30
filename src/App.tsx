import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import ProjectImageCarousel from './components/ProjectImageCarousel';
import loadProjectImages from './utils/load-project-images';

function App() {
  const [images, setImages] = useState<ProjectImage[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const images = await loadProjectImages();

      setImages(images);
    };

    fetchData().catch(console.error);
  }, []);

  if (!images) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }

  return (
    <div className="App">
      <ProjectImageCarousel images={images} />
    </div>
  );
}

export default App;
