import React, { PureComponent } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { CommitInputContainer } from './style';
import moment from 'moment'
export default class CommitInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      content: [],
      value: ""
    }
  }
  render() {
    return (
      <CommitInputContainer>
        <div className='InputContainer'>
          <Input.TextArea placeholder='请输入评论' rows={4} value={this.state.value} onChange={(e) => this.handelTheinputContent(e)} />
          <Button className='InputContainer_button' onClick={this.CommitInputContainerButton.bind(this)} type="primary">提交评论</Button>
        </div>
      </CommitInputContainer>
    )
  }
  handelTheinputContent(e) {
    this.setState({
      value: e.target.value
    })
  }
  CommitInputContainerButton() {
    if (!this.state.value) {
      alert('请添加评论')
      return
    }
    let setInputContent={
      value:this.state.value,
      time:moment().format('MMMM Do YYYY, h:mm:ss a'),
      img:'https://avatars.githubusercontent.com/u/49740023?v=4',
      name:'奥奥奥'
    }
    this.props.getInputContent(setInputContent);
    this.setState({
      value: ''
    })
  }
}
