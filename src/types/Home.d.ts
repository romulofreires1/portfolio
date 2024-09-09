export interface Image {
  url: string;
  alt: string;
}

export interface Technology {
  name: string;
  textColor: string;
  backgroundColor: string;
  icon: string;

}

export interface AboutMe {
  title: {
    greetingMessage: string;
    name: string;
  };
  description: string;
  technologies: Technology[];
  imageContainer: {
    image: Image;
  };
}

export interface Project {
  name: string;
  image: Image;
  url: string;
}
