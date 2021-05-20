import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment'
import { DeleteOutlined } from "@ant-design/icons";
import { CommitItemStyle } from './style';
export default class CommitItem extends PureComponent {
  render() {
    let { giveDataToCommitItem } = this.props;
    return (
      <CommitItemStyle>
        <div className='CommitItemStyle_list'>
        {
          giveDataToCommitItem.map((item, index) => {
            return (
              <Comment
                actions={[
                  <span onClick={() => {
                    this.props.removeItem(index)
                  }}><DeleteOutlined /> 删除</span>
                ]}
                author={<a>{item.name}</a>}
                avatar={
                  <Avatar
                    src={item.img}
                    alt={item.name}
                  />
                }
                content={
                  <p>
                    {item.value}
                  </p>
                }
                datetime={
                  <Tooltip title={item.time}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
                key={item.time}
              />
            )
          })
        }
        </div>
      </CommitItemStyle>
    )
  }

}
