interface Original {
  url: string;
}

interface Images {
  original: Original;
}

export default interface Gif {
  type: string;
  url: string;
  images: Images;
  title: string;
  id: string;
}
