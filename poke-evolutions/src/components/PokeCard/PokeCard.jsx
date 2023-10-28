function PokeCard({pokeName}) {
	return (
		<div className="flex bg-white rounded-lg w-80 h-80 py-2 px-3 m-3">
			<div className="w-full">
				<img src="" alt="" />
			</div>
            <div className="">
                <span className="">{pokeName}</span>
            </div>
		</div>
	);
}

export default PokeCard;
