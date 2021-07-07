import "./memecard.css";

function Memecard() {
    const Meme = () => {
        return (
            <img src="https://i.redd.it/62f3xfruvr971.jpg" alt="" />
        );
    };
    return (
        <div className='memecard'>
            <Meme></Meme>
            <div className='texter'><h1>MEME Card</h1></div>
        </div>
    );
}

export default Memecard;