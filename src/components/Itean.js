const Iteam = (props) => {
	const { image, title, price, description, category } = props.data;

	return (
		<div className='iteam'>
			{' '}
			<img src={image} alt='' />
			<h2>{title}</h2>
			<p>{price}</p>
			<p>{description}</p>
			<p>{category}</p>
		</div>
	);
};

export default Iteam;
