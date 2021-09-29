import './../../css/style.css'
import arrow from './../../assets/arrow.svg'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Payment() {

    const [name, setName] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле не может быть пустым')

    const [card, setCard] = useState('');
    const [cardDirty, setCardDirty] = useState(false);
    const [cardError, setCardError] = useState('Поле не может быть пустым')

    const [period, setPeriod] = useState('');
    const [periodDirty, setPeriodDirty] = useState(false);
    const [periodError, setPeriodError] = useState('Поле не может быть пустым')

    const [cvv, setCvv] = useState('');
    const [cvvDirty, setCvvDirty] = useState(false);
    const [cvvError, setCvvError] = useState('Поле не может быть пустым')

    const nameHandler = (e, class_name) => {
        setName(e.target.value)
        if(e.target.value.length > 50) {
            setNameError('Слишком длинное имя');
        } else if (e.target.value.length < 1) {
            setNameError('Поле не может быть пустым');
        } else if (e.target.value[0] === ' ') {
            setNameError('Строка не должна начинаться с пробела');
        }
        else {
            setNameError('');
            document.documentElement.style.setProperty(class_name, "1px solid #EEEDED")
        }
    }

    const cardHandler = (e, class_name) => {
        setCard(e.target.value)
        if(e.target.value.length > 20) {
            setCardError('Слишком длинный номер');
        } 
        else if (e.target.value.length < 1) {
            setCardError('Поле не может быть пустым');
        } else if(e.target.value.length > 1 && e.target.value.length < 20) {
            setCardError('Слишком короткий номер');
        } else if (e.target.value.includes(' ')) {
            setCardError('Строка не должна содержать пробелы');
        } else if(isNaN(e.target.value)) {
            setCardError('Неверный формат');
        } 
        else {
            setCardError('');
            document.documentElement.style.setProperty(class_name, "1px solid #EEEDED")
        }
    }

    const periodHandler = (e, class_name) => {
        setPeriod(e.target.value)
        if(e.target.value.length > 5 || e.target.value.length < 5) {
            setPeriodError('Неверный формат');
        } else if (e.target.value.includes(' ')) {
            setPeriodError('Строка не должна содержать пробелы');
        } else if (isNaN(e.target.value[0]) || isNaN(e.target.value[1]) || e.target.value[2] != '/' || isNaN(e.target.value[3]) || isNaN(e.target.value[4])) {
            setPeriodError('Неверный формат');
        } else {
            setPeriodError('');
            document.documentElement.style.setProperty(class_name, "1px solid #EEEDED")
        }
    }

    const cvvHandler = (e, class_name) => {
        setCvv(e.target.value)
        if(e.target.value.length > 3 || e.target.value.length < 3) {
            setCvvError('Неверный формат');
        } else if (e.target.value.includes(' ')) {
            setCvvError('Строка не должна содержать пробелы');
        } else if(isNaN(e.target.value)) {
            setCvvError('Неверный формат');
        } else {
            setCvvError('');
            document.documentElement.style.setProperty(class_name, "1px solid #EEEDED")
        }
    }

    const blurhandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break

            case 'card':
                setCardDirty(true)
                break

            case 'period':
                setPeriodDirty(true)
                break

            case 'cvv':
                setCvvDirty(true)
                break
        }
    }

    const setDirties = () => {
        setNameDirty(true)
        setCardDirty(true)
        setPeriodDirty(true)
        setCvvDirty(true)
    }

    return(
        <div className='modal_position'>
            <div className='modal'>
                <div className='modal__header'>
                    <span className='label_delivery'>Доставка</span>
                    <img alt='arrow' src={arrow} />
                    <span className='label_pay current_step'>Оплата</span>
                </div>
                <div className='modal__content'>
                    <h2 className='modal__content__label'>Оплата</h2>

                    <div className='form__label'>Имя на карте</div>
                    {(nameDirty && nameError) && document.documentElement.style.setProperty("--nameBorderStyle", "1px solid red")}
                    {nameDirty && nameError && <div style={{color: 'red'}}>{nameError}</div>}
                    <input onChange={e => nameHandler(e, '--nameBorderStyle')} value={name} onBlur={e => blurhandler(e)} name='name' className='form__input name' type='text' placeholder='ФИО' />

                    <div className='form__label'>Номер карты</div>
                    {(cardDirty && cardError) && document.documentElement.style.setProperty("--cardBorderStyle", "1px solid red")}
                    {cardDirty && cardError && <div style={{color: 'red'}}>{cardError}</div>}
                    <input onChange={e => cardHandler(e, '--cardBorderStyle')} value={card} onBlur={e => blurhandler(e)} name='card' className='form__input card' type='text' placeholder='ХХХХ ХХХХ ХХХХ ХХХХ ХХХХ' />

                    <div className='detail_info_section'>
                        <div className='short_form__flex'>
                            <div className='form__label'>Срок</div>
                            {(periodDirty && periodError) && document.documentElement.style.setProperty("--periodBorderStyle", "1px solid red")}
                            <input onChange={e => periodHandler(e, '--periodBorderStyle')} value={period} onBlur={e => blurhandler(e)} name='period' className='short_form__input period' type='text' placeholder='MM/YY' />
                        </div>
                        <div>
                            <div className='form__label'>CVV</div>
                            {(cvvDirty && cvvError) && document.documentElement.style.setProperty("--cvvBorderStyle", "1px solid red")}
                            <input onChange={e => cvvHandler(e, '--cvvBorderStyle')} value={cvv} onBlur={e => blurhandler(e)} name='cvv' className='short_form__input cvv' type='text' />
                        </div>
                    </div>
                    {periodDirty && periodError && <div style={{color: 'red'}}>{periodError}</div>}
                    {cvvDirty && cvvError && <div style={{color: 'red'}}>{cvvError}</div>}
                    {nameError || cardError || cvvError || periodError ? <div onClick={setDirties} className='continue_button'><div className='button__label'>Продолжить</div></div> : <div className='button_link_size'><Link className='link' to='/finish'><div className='continue_button'><div className='button__label'>Продолжить</div></div></Link></div>}
                </div>
            </div>
        </div>
    );
}

export default Payment;