// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card-item ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} className="img" alt={title} />
    </li>
  )
}

export default CardItem
