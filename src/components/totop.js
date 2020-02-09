import React from 'react'
import { MdVerticalAlignTop } from 'react-icons/md'

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { isVisible } = this.state;

    const buttonModifier = isVisible ? ("_enabled") : ("_disabled")

    return (
      <div className="scroll-to-top">
        <button className={'scroll-to-top__button scroll-to-top__button'+buttonModifier} onClick={() => this.scrollToTop()}><MdVerticalAlignTop />Scroll to top</button>
      </div>
    );
  }
}

export default ScrollToTop
