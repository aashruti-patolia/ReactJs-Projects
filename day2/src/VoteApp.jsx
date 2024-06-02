import './App.css'
import { useState } from 'react'
function VoteApp() {
    let [red, setRed] = useState(0)
    let [yellow, setYellow] = useState(0)
    let [green, setGreen] = useState(0)
    let [blue, setBlue] = useState(0)


    function Red() {
        setRed(red + 1);
    }

    function Yellow() {
        setYellow(yellow + 1);
    }

    function Green() {
        setGreen(green + 1);
    }

    function Blue() {
        setBlue(blue + 1);
    }
    return (
        <div className='App'>
            <div className='Counter'>
                <h1>Voting Application</h1>
                <div className="voteCards">
                    <div className="Candidate">
                        <p> Red House </p>
                        <img src="https://static.vecteezy.com/system/resources/previews/015/211/968/original/red-button-icon-cartoon-style-vector.jpg" alt="" onClick={Red} />
                    </div>
                    <div className="Candidate">
                        <p> Yellow House </p>
                        <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-yellow-button-icon-cartoon-style-png-image_5208459.jpg" alt="" onClick={Yellow} />
                    </div>
                    <div className="Candidate">
                        <p> Green House</p>
                        <img src="https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-round-green-button-icon-cartoon-style-png-image_1894078.jpg" onClick={Green} alt="" />
                    </div>
                    <div className="Candidate">
                        <p> Blue House </p>
                        <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-blue-button-icon-cartoon-style-png-image_5208463.jpg" onClick={Blue} alt="" />
                    </div>
                </div>
                <div className="voteCount">
                    <div className="Vote">
                        {red}
                    </div>
                    <div className="Vote">
                        {yellow}
                    </div>
                    <div className="Vote">
                        {green}
                    </div>
                    <div className="Vote" id='blueVote'>
                        {blue}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VoteApp;