import * as React from 'react'
import TopLogo from '../../components/TopLogo'
import Mission from '../../components/Mission'
import News from '../../components/News'
import OurInvention from '../../components/OurInvention';
import Team from '../../components/Team';
import ContactUs from '../../components/ContactUs'

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <TopLogo />
                <Mission />
                <News />
                <OurInvention/>
                <Team />
                <ContactUs />
            </div>
        )
    }
}

export default Home