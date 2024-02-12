function MetaDescription({
  imgSrc,
  alt,
  title,
  description,
}: {
  readonly imgSrc: string;
  readonly alt: string;
  readonly title: string;
  readonly description: string;
}) {
  return (
    <div className="metaDescripcion">
      <img src={imgSrc} alt={alt} className="imgMetas" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="empezar">Empezar</button>
    </div>
  );
}

export default MetaDescription;
