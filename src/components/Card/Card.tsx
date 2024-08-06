    import './CardStyles.css';
    import placeholder from './CardMedia/placeholder.png'
    function Card()
    {
        return(
            <>
                <div className="vertical-card">
                    <div className="first-part">
                        <img src={placeholder} alt={"123"}/>
                    </div>
                    <div className="second-part">
                        <h3>I am studying Computer Science at Lviv Polytechnic National University</h3>
                    </div>
                </div>
            </>
        );
    }

    export default Card;