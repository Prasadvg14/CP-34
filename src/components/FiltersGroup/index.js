import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    activeCategory,
    activeRating,
    categoryOptions,
    ratingsList,
    onChangeSearchInput,
    onChangeCategory,
    onChangeRating,
    onClickClear,
  } = props

  const onClickCatBtn = event => {
    onChangeCategory(event.target.value)
  }
  const onClickRating = event => {
    onChangeRating(event.target.value)
  }
  const onChangeInput = event => {
    onChangeSearchInput(event.target.value)
  }
  const onClickClearbtn = () => {
    onClickClear()
  }

  return (
    <div className="filters-group-container">
      <div className="search-box">
        <input
          onChange={onChangeInput}
          className="search"
          type="search"
          placeholder="search"
        />
        <BsSearch />
      </div>
      <h2 className="p">Category</h2>
      <ul className="cat">
        {categoryOptions.map(each => (
          <li
            key={each.name}
            onClick={onClickCatBtn}
            className={
              each.categoryId === activeCategory ? 'c-btn a-cat' : 'c-btn'
            }
            type="button"
            value={each.categoryId}
          >
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
      <h2 className="p">Rating</h2>
      <ul className="cat">
        {ratingsList.map(each => (
          <li
            key={each.ratingId}
            value={each.ratingId}
            type="button"
            className={each.ratingId === activeRating ? 'c-btn a-rat' : 'c-btn'}
            onClick={onClickRating}
          >
            <p>
              <img
                className="stars"
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
              />
              & up
            </p>
          </li>
        ))}
      </ul>
      <button onClick={onClickClearbtn} type="button" className="clear-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
