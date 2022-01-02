import React, { FC, forwardRef } from 'react'

export type fileIconProps = {
  text: string
}

export const FileIcon: FC<fileIconProps> = forwardRef(props => {
  return (
    <div className='reco-file-icon'>
      <i className='mobile mobile-blank_file' />
      <span className='file-icon-text'>{props.text}</span>
    </div>
  )
})
