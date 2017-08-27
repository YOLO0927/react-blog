import React from 'react'
import NoticeComponent from './components/Alert'

const Notice = () => {
  const noticeAttr = {
    message: '成功',
    type: 'success',
    showIcon: true,
    isTop: true
  }

  return (
    <NoticeComponent message={noticeAttr.message} showIcon={noticeAttr.showIcon} type={noticeAttr.type} isTop={noticeAttr.isTop}/>
  )
}

export default Notice
