'use client'

import { inclusions, noHeaderFooterUrls, profileNavItems } from 'app/constansts'
import classes from './index.module.scss'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Gutter } from 'app/_components/Gutter'
import Image from 'next/image'
import Link from 'next/link'
import { Media } from 'payload/payload-types'
import { Footer } from '../../../../payload/payload-types'
import { Button } from 'payload/components'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
            </Link>

            <p>{footer?.copyright}</p>

            <div className={classes.socialLinks}>
              {navItems.map(item => {
                const icon = item?.link?.icon as Media

                return (
                  <a
                    key={item.link.label}
                    // el="link"
                    href={item.link.url}
                    target="_blank"
                    // newTab={true}
                    className={classes.socialLinkItem}
                  >
                    <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    ></Image>
                  </a>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
