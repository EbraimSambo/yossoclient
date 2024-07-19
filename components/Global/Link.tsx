import Link from 'next/link'
import React from 'react'
import link from './link.module.css'
interface Props{
    href: string,
    children: React.ReactNode,
    target?: "_self"
    | "_blank"
    | "_parent"
    | "_top"
    | (string & {});
}
const LinkApp: React.FC<Props> = ({href,children,target}) => {
  return (
    <Link className={link.link} style={{textDecoration: "none"}} href={href} target={target} > {children} </Link>
  )
}

export default LinkApp