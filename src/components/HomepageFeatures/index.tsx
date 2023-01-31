import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Advanced Audio',
		Svg: require('@site/static/img/audio.svg').default,
		description: (
			<>
				Impressive 3D Audio and simple integration thanks to the OpenAL API.
				Handle Audio Input or Output with a simple and abstract API that has been directly
				integrated with Junia Components and a global audio mixer to keep your audio channels
				organized.
			</>
		),
	},
	{
		title: 'Easy to Use',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				The Junia API is focused around what matters to you as a creator instead of technological
				specifics while still exposing as much as possible of the low-level API. Use tools of your
				choosing to create assets and write code and let the engine take care of the rest.
			</>
		),
	},
	{
		title: 'Powered by Vulkan',
		Svg: require('@site/static/img/vulkan.svg').default,
		description: (
			<>
				Fully portable games with low-level access to rendering thanks to the
				verbose Vulkan API. Load 3D-Models on the fly and use the simple `JESL`
				shader language or your own SPIR-V shaders to bring everything to the
				screen fast and easy.
			</>
		),
	},
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
