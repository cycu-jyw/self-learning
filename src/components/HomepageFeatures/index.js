import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Git',
    Svg: require('@site/static/img/git.svg').default,
    description: (
      <>
        A free and open source distributed version control system 
        designed to handle everything from small to very large projects 
        with speed and efficiency.
      </>
    ),
  },
  {
    title: 'GitHub',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
        Where the world builds software
        Millions of developers and companies build, ship,
        and maintain their software on GitHub.
      </>
    ),
  },
  {
    title: 'Markdown',
    Svg: require('@site/static/img/markdown.svg').default,
    description: (
      <>
        A lightweight markup language that you can use to add formatting
        elements to plaintext text documents. 
        Markdown is now one of the world’s most popular markup languages.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
