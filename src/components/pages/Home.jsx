import HomeExtra from '../../inner-pages/Home/HomeExtra'
import HomeMain from '../../inner-pages/Home/HomeMain'
import HomeProducts from '../../inner-pages/Home/HomeProducts'
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
