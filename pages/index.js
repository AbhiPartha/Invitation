import Leadin from '../containers/Leadin'
import Title from '../containers/Title'
import Head from 'next/head'

class Invitation extends React.Component {

    constructor(props) {
        super(props);
        this.sample = this.sample.bind(this);
    }

    sample(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Head>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <Title />
                <Leadin />
                <style jsx global>
                    {`
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }

                        body {
                            background-image: url(/static/images/color-bulbs.png);
                            background-repeat: no-repeat;
                            background-size: 100%;
                        }
                    `}
                </style>
            </div>
        )
    }
}


export default Invitation