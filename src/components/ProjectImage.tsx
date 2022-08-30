export default function ProjectImage({ projectImage }: { projectImage: ProjectImage }) {
  const style = {
    backgroundImage: `url('${projectImage.image.url}')`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  };

  return <div style={style} className="project-image" />;
}
