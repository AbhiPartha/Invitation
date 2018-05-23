import Carousel from '../components/Carousel'

class Leadin extends React.Component {
    render() {
        return(
            <div className="lead-in">
                <div className="outer-border">
                    <div className="inner-border">
                        <div className="gallery">
                            <Carousel />
                        </div>
                        <div className="invite-content">
                            <div className="out-border">
                                <div className="in-border">
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
                
                <style jsx>
                {`
                    .lead-in{
                        margin-top: -50px;
                        .outer-border, .inner-border{
                            border-top: 2px solid #DED5C7;
                            border-bottom: 2px solid #DED5C7;
                        }   

                        .inner-border{
                            margin-top: 8px;
                            margin-bottom: 8px;
                            overflow: hidden;
                            background-color: rgba(248, 244, 237, 0.1);

                            .gallery{
                                width: 65%;
                                float: left;
                                padding: 30px 6px 30px 30px;
                                overflow: hidden;
                            }

                            .invite-content{
                                width: 35%;
                                float: left;
                                padding: 30px 30px 30px 24px;
                                .out-border{
                                    border: 2px solid #C8BDA9;
                                    padding: 4px
                                }
                                .in-border{
                                    border: 2px solid #C8BDA9;
                                    background-color: rgba(192, 164, 115, 0.1);
                                    height: 284px;
                                }
                            }
                        }
                    }

                `}
                </style>
            </div>
        )
    }
}

export default Leadin