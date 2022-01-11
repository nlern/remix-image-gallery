export type ImageType = {
  urls: { small: string };
  id: string;
  description: string;
  alt_description: string;
  user: {
    name: string;
    profile_image: {
      small: string;
    };
    links: {
      html: string;
    };
  };
  links: {
    html: string;
  };
};
