var React = require('react')

module.exports = React.createClass({
  'displayName': 'Like.jsx',

  getInitialState: function () {
    return {
      isClicked: false
    }
  },

  render: function () {
    var like = {
      style: this.state.isClicked ? 'Like--clicked' : '',
      text: this.state.isClicked ? 'Liked' : 'Like!'
    }

    return (
      <div className={'Like ' + like.style} onClick={this.handleClick}>
        <p className='Like__text'>{like.text}</p>
      </div>
    )
  },

  handleClick: function () {
    if (!this.state.isClicked) {
      this.setState({
        isClicked: true
      })
    }
  }
})
