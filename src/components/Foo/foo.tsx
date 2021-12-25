import React, { FC } from 'react'

export type FooProps = {
  title: string
}

export const Foo: FC<FooProps> = ({ title }) => {
  return <h3>{title}</h3>
}
