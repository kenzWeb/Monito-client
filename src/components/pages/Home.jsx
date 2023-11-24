import HomeExtra from '../../inner-pages/HomeExtra'
import HomeMain from '../../inner-pages/HomeMain'
import HomeProducts from '../../inner-pages/HomeProducts'
import Footer from '../Footer/Footer'

export const Home = () => {
	return (
		<>
			<HomeMain />
			<HomeProducts />
			<HomeExtra />
			<Footer />
		</>
	)
}
