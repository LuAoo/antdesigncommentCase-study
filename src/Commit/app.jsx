import React, { PureComponent } from 'react'
import { AppStyle } from './appstyle';
import CommitInput from './componet/CommitInput/CommitInput'
import CommitItem from './componet/CommitItem/CommitItem'

export default class app extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    }
  }
  render() {
    return (
      <AppStyle>
        <div className='AppStyle'>
          <CommitItem giveDataToCommitItem={this.state.content}
            removeItem={(index) => this.removeItem(index)} />
          <CommitInput getInputContent={(content) => { this.getInputContent(content) }} />
        </div>
      </AppStyle>
    )
  }
  getInputContent(contenttt) {
    this.setState({
      content: [...this.state.content, contenttt]
    })
  }
  componentDidUpdate() {
  }
  removeItem(index) {
    let newcontent = [...this.state.content];
    newcontent.splice(index, 1);
    this.setState({
      content: newcontent
    })
  }
}
