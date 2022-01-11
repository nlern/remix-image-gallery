import type { ImageType } from "~/types/image.type";

export default function ImageCard({ img }: { img: ImageType }) {
  return (
    <div className="image-card__container">
      <div className="image-card__image-container">
        <a href={img.links.html} target="_blank" referrerPolicy="no-referrer">
          <img
            src={img.urls.small}
            alt={img.alt_description}
            className="image-card__image"
          />
        </a>
      </div>
      <div className="image-card__content">
        <div className="image-card__author">
          <div className="image-card__author-avatar">
            <a
              href={img.user.links.html}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <img
                className="image-card__author-avatar-image"
                src={img.user.profile_image.small}
                alt={`${img.user.name} avatar`}
              />
            </a>
          </div>
          <div className="image-card__author-name">{img.user.name}</div>
        </div>
        <div className="image-card__description">{img.description}</div>
      </div>
    </div>
  );
}
