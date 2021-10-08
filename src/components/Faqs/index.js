// Write your code here.
import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="background-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-items-container">
          {faqsList.map(faqItem => (
            <FaqItem key={faqItem.id} faqInfo={faqItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
