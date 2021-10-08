// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onToggleExpandFaq = () => {
    this.setState(previousState => ({
      isActive: !previousState.isActive,
    }))
  }

  render() {
    const {faqInfo} = this.props
    const {isActive} = this.state
    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imageAlt = isActive ? 'minus' : 'plus'
    const {questionText, answerText} = faqInfo
    return (
      <li className="faq-item">
        <div className="faq-info-container">
          <h1 className="question">{questionText}</h1>
          <img
            src={imageUrl}
            alt={imageAlt}
            onClick={this.onToggleExpandFaq}
            className="toggle-img"
          />
        </div>
        {isActive && (
          <div>
            <hr />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
