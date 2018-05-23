import Image from "../components/Image"

class Title extends React.Component {

    render() {
        return(
            <div className="title">
                <Image src="/static/images/title.png" width="70%" float="right"/>
                <style jsx>
                    {`
                        .title{
                            margin-top: 120px;
                            overflow: hidden;
                        }
                    `}
                </style>    
            </div>
        )
    }
}


export default Title