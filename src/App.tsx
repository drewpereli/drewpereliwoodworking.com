import { createContext, useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import { Modal } from './components/Modal';
import ProjectImageCarousel from './components/ProjectImageCarousel';
import { Loading } from './components/Svgs';
import TopBar from './components/TopBar';
import { ContactModalContext } from './contexts';
import loadProjectImages from './utils/load-project-images';

function App() {
  const [images, setImages] = useState<ProjectImage[] | undefined>();
  const [showingContactModal, setShowingContactModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const images = await loadProjectImages();

      setImages(images);
    };

    fetchData().catch(console.error);
  }, []);

  if (!images) {
    return (
      <div className="App h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="App h-screen">
      <ContactModalContext.Provider value={{ showingContactModal, setShowingContactModal }}>
        <TopBar />
        <ProjectImageCarousel images={images.sort((a, b) => a.order - b.order)} />
      </ContactModalContext.Provider>

      {showingContactModal && (
        <Modal title="Get in Touch" onClose={() => setShowingContactModal(false)}>
          <div className="w-full flex justify-center">
            <ContactForm className="w-full max-w-md" />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
