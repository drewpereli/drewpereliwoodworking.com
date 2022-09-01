export {};

declare global {
  interface ProjectImage {
    order: number;
    image: {
      url: string;
    };
  }
}
