import './../../css/style.css'
import verified from './../../assets/verified.svg'

function Finish() {
    return(
        <div className='modal_position'>
            <div className='modal'>
                <div className='verified'>
                    <img className='verified__logo' src={verified} alt='verified' />
                    <div>Спасибо!</div>
                </div>
            </div>
        </div>
    );
}

export default Finish;