import React from 'react'

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */

function Svg ({ fill }) {
	const strokeWidth = 10

	return (
		<svg
			width='30'
			height='26'
			viewBox='0 0 253 219'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M41.0625 171.438L66.6875 171.562L137.219 48.8438L238.216 217.151L250.767 194.258L137.562 2.25L41.0625 171.438Z'
				stroke={fill}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M1.625 195.062L13.5 217.438L238.305 217.283L137.232 48.8593L124.549 70.9343L197.734 194.927L1.625 195.062Z'
				stroke={fill}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M110.056 1.9906L1.63879 195.025L197.764 194.968L183.881 171.512L40.949 171.532L137.674 2.25381L110.056 1.9906Z'
				stroke={fill}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default function Logo ({ fill }) {
	const logoStyle = {
		fontSize: '20px'
	}
	const thomasStyle = {
		color: fill,
		paddingLeft: '10px'
	}
	const baileyStyle = {
		color: 'hsl(208, 5%, 50%)',
		fontWeight: 400
	}

	return (
		<>
			<Svg fill={fill} />
			<h1 style={logoStyle}>
				<span style={thomasStyle}>THOMAS</span>{' '}
				<span style={baileyStyle}>BAILEY</span>
			</h1>
		</>
	)
}
