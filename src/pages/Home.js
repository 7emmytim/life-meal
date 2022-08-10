import Header from '../components/General/Header'
import Banner from '../components/Home/Banner'
import WhyLifeMeal from '../components/Home/WhyLifeMeal'

const Home = () => {
    return (
        <div>
            <div className='h-[100vh]'>
                <Header />
                <Banner />
            </div>
            <WhyLifeMeal />
        </div>
    )
}

export default Home