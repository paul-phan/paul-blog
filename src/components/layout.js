function Layout(props) {
	return (
		<div
			className="flex flex-col min-h-screen font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
			style={{backgroundImage: `url('https://images.unsplash.com/photo-1583963793123-2cfce22eb7a1')`}}>
			{/*<Header/>*/}
			<main className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
				{props.children}
			</main>
			{/*<Footer/>*/}
		</div>
	)
}

export default Layout
