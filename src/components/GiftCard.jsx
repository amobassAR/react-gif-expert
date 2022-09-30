

export const GiftCard = ({image}) => {
  return (
    <div className="card">
        <h6  key={image.id}>{image.title}</h6>
        <img src={image.url} alt="Imagen" />
    </div>
  )
}
