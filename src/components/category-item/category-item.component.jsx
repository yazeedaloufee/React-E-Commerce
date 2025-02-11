import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (
    <div
      className="category-container"
      key={id}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
