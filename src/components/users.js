const Users = (props) => {
	const { userId, products, date } = props.data;

	return (
		<div className='iteam'>
			{' '}
			<p>userId :{userId}</p>
			<p>date :{date}</p>
			{products?.map((el) => (
				<div div key={el.id}>
					<p>productId{el.productId}</p> <p>quantity{el.quantity}</p>
				</div>
			))}
		</div>
	);
};

export default Users;
