import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Git',
    link: '/docs/git/intro',
    Svg: require('@site/static/img/git.svg').default,
    description: (
      <>
        Git 是自由開放的分散式版本控管軟體，最初設計用來管理從小規模到很大規模的專案，
        具有很快的速度和很高的效率。
      </>
    ),
  },
  {
    title: 'GitHub',
    link: '#', ///docs/github',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
        數以百萬計的軟體開發者和公司，維護、分享和管理軟體的地方，可能也是世界上
        使用 Git 分享軟體專案最大的平台。

      </>
    ),
  },
  {
    title: 'Markdown',
    link: '#', ///docs/markdown',
    Svg: require('@site/static/img/markdown.svg').default,
    description: (
      <>
        Markdown 是輕量級的網頁文本標記語言，讓您輕鬆撰寫網頁文稿，
        也是世界上最流行的標記語言之一。
      </>
    ),
  },
];

function Feature({ Svg, title, link, description }) {
  return (
    <div className={clsx('col col--4')}>
      <Link href={link}><a>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a></Link>
      <div className="text--center padding-horiz--md">
        <Link href={link}><a>
          <h3>{title}</h3>
        </a></Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
