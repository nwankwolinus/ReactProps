import React from 'react'
import Myimage from '../assets/T.jpg'

function Child({handleName}) {
    return <button onClick={handleName}>Alert</button>;
}

function MyProfile ({fullName, bio, proffession}) {

    function handleName(){
    
    return(<div>{alert('Linus Nwankwo')}</div>)
    
    }

    return (
        <div>
            <div>
                <h2>{fullName}</h2>
                <h3>{proffession}</h3>
                <p>{bio}</p>
                <Child handleName={handleName} />
            </div>
                <div style={{ margin: '50px' }}>
                    <img src={Myimage} alt="Linus Nwankwo" style={{ width: '400px', height: '500px'}}/>
                </div>
        </div>
    )

}


export default MyProfile;