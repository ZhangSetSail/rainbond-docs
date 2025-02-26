/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/BlogSidebar';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export default function BlogSidebar({ sidebar }: Props): JSX.Element | null {
  const location_url = useLocation().pathname;
  console.log(location_url);
  if (! location_url.includes('blog')) {
    return null;
  }
  return (
    <nav
      className={clsx(styles.sidebar, 'thin-scrollbar')}
      aria-label={translate({
        id: 'theme.blog.sidebar.navAriaLabel',
        message: 'Blog recent posts navigation',
        description: 'The ARIA label for recent posts in the blog sidebar'
      })}
    >
      <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
        {sidebar.title}
      </div>
      <ul className={styles.sidebarItemList}>
        {sidebar.items.map(item => (
          <li key={item.permalink} className={styles.sidebarItem}>
            <Link
              isNavLink
              to={item.permalink}
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
