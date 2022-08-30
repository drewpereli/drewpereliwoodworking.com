import { Carousel } from 'react-responsive-carousel';
import ProjectImage from './ProjectImage';

export default function ProjectImageCarousel({ images }: { images: ProjectImage[] }) {
  const projectImageComponents = images.map((img, idx) => <ProjectImage projectImage={img} key={idx} />);

  return (
    <Carousel
      autoPlay
      autoFocus
      infiniteLoop
      interval={5000}
      showThumbs={false}
      useKeyboardArrows={true}
      showStatus={false}
    >
      {projectImageComponents}
    </Carousel>
  );
}
