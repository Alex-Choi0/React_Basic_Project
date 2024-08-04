import "./category-item.styles.scss"

const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category
  console.log("id : ", id)
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem