function Button({ counter, name }) {
	return (
		<button
			className="flex h-10 w-20 items-center justify-center bg-slate-100 py-4 px-4 rounded-full ml-2"
			onClick={counter}>
			{name}
		</button>
	);
}

export default Button;
