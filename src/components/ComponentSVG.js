


const svgObject = {
    star: 'm11.65 44 3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55Z',
    staroutline: 'm16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z',
    starhalf: 'm24 33.05 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55Z',
    close: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
};

const ComponentSVG = ({variant, size = '24px', color = 'currentColor'}) => {
	return (
		<svg style={{width: size, height: size}} viewBox="0 0 24 24">
			<path fill={color} d={svgObject[variant]} />
		</svg>
	);
};

export default ComponentSVG;