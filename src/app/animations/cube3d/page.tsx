export default function Cube3d() {
	return (
		<div>
			<div className='flex flex-col justify-center items-center'>
				<div className=' text-black m-4 text-5xl'>3d Cube</div>
			</div>
			<div className='cube3d-container'>
				<div className='scene'>
					<div className='floor'></div>
					<div className='cube'>
						<div className='front'></div>
						<div className='back'></div>
						<div className='left'></div>
						<div className='right'></div>
						<div className='top'>
							<div className='ballShadow'></div>
						</div>
						<div className='bottom'></div>
					</div>
					<div className='ball'></div>
				</div>
			</div>
		</div>
	);
}
