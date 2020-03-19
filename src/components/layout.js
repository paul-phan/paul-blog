import Header from './header'
import Footer from './footer'

function Layout(props) {
	return (
		<div
			className="flex flex-col min-h-screen font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
			style={{backgroundImage: `url('https://source.unsplash.com/1L71sPT5XKc')`}}>
			<Header/>
			<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
				{props.children}
			</main>
			<Footer/>
		</div>
	)
}

export default Layout
