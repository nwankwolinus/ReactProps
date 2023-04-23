import Myimage from '../assets/T.jpg'


function Photo() {
    return (
        <div style={{ margin: '100px' }}>
        <img src={Myimage} alt="Linus Nwankwo" style={{ width: '400px', height: '500px'}}/>
        </div>
    );
}

export default Photo;