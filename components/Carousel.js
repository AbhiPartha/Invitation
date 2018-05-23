import SlickCarousel from "./SlickCarousel";

const Carousel = (props) => (
    <div className="film-roll">
        <div class="top">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
        </div>
        <div class="in">
            <SlickCarousel />
        </div>
        <div class="bottom">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
        </div>
        <style jsx>
            {`
                .film-roll {
                    width: 100%;
                    overflow: hidden;
                    .top, .bottom {
                        height: 38px;
                        overflow: hidden;
                        background-color: black;
                        span{
                            display: inline-block;
                            margin: 12px 8px 2px;
                            height: 24px;
                            width: 12px;
                            background-color: white;
                            border-radius: 2px;
                            &:first-child{
                                margin-left: 0;
                            }
                            &:last-child{
                                margin-right: 0;
                            }
                        }
                    }
                    .bottom {
                        span{
                            margin: 2px 8px 12px;
                        }
                    }
                    .in{
                        background-color: black;
                        height: 220px;
                    }
                }
            `}
        </style>
    </div>
);

export default Carousel;
