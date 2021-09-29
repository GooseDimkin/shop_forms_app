import './../../css/style.css'
import arrow from './../../assets/arrow.svg'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Delivery() {

    const [name, setName] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле не может быть пустым')

    const [city, setCity] = useState('');
    const [cityDirty, setCityDirty] = useState(false);
    const [cityError, setCityError] = useState('Поле не может быть пустым')

    const [adress, setAdress] = useState('');
    const [adressDirty, setAdressDirty] = useState(false);
    const [adressError, setAdressError] = useState('Поле не может быть пустым')

    const [country, setCountry] = useState('');
    const [countryDirty, setCountryDirty] = useState(false);
    const [countryError, setCountryError] = useState('Поле не может быть пустым')

    const [index, setIndex] = useState('');
    const [indexDirty, setIndexDirty] = useState(false);
    const [indexError, setIndexError] = useState('Поле не может быть пустым')

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

    const cityHandler = (e, class_name) => {
        setCity(e.target.value)
        if(e.target.value.length > 50) {
            setCityError('Слишком длинное название');
        } else if (e.target.value.length < 1) {
            setCityError('Поле города не может быть пустым');
        } else if (e.target.value[0] === ' ') {
            setCityError('Строка не должна начинаться с пробела');
        }
        else {
            setCityError('');
            document.documentElement.style.setProperty(class_name, "1px solid #EEEDED")
        }
    }

    const adressHandler = (e, class_name) => {
        setAdress(e.target.value)
        if (e.target.value.length < 1) {
            setAdressError('Поле адреса не может быть пустым');
        } else if (e.target.value[0] === ' ') {
            setAdressError('Строка не должна начинаться с пробела');
        }
        else {
            setAdressError('');
            document.documentElement.style.setProperty(class_name, "1px solid #EEEDED")
        }
    }

    const countryHandler = (e, class_name) => {
        setCountry(e.target.value)
        if(e.target.value.length > 100) {
            setCountryError('Слишком длинный адрес');
        } else if (e.target.value.length < 1) {
            setCountryError('Поле страны не может быть пустым');
        } else if (e.target.value[0] === ' ') {
            setCountryError('Строка не должна начинаться с пробела');
        }
        else {
            setCountryError('');
            document.documentElement.style.setProperty(class_name, "1px solid #EEEDED")
        }
    }

    const indexHandler = (e, class_name) => {
        setIndex(e.target.value)
        if (e.target.value.length < 1) {
            setIndexError('Поле индекса не может быть пустым');
        } else if(isNaN(e.target.value) || e.target.value.length > 5 || e.target.value.length < 5) {
            setIndexError('Неверный формат индекса');
            
        } else if (e.target.value[0] === ' ') {
            setIndexError('Строка не должна начинаться с пробела');
        }
        else {
            setIndexError('');
            document.documentElement.style.setProperty(class_name, "1px solid #EEEDED")
        }
    }

    const blurhandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break

            case 'adress':
                setAdressDirty(true)
                break

            case 'city':
                setCityDirty(true)
                break

            case 'country':
                setCountryDirty(true)
                break

            case 'index':
                setIndexDirty(true)
                break
        }
    }

    const setDirties = () => {
        setNameDirty(true)
        setAdressDirty(true)
        setCityDirty(true)
        setCountryDirty(true)
        setIndexDirty(true)
    }

    return(
        <div className='modal_position'>
            <div className='modal'>
                <div className='modal__header'>
                    <span className='label_delivery current_step'>Доставка</span>
                    <img alt='arrow' src={arrow} />
                    <span className='label_pay'>Оплата</span>
                </div>
                <div className='modal__content'>
                    <h2 className='modal__content__label'>Информация для доставки</h2>

                    <div className='form__label'>Получатель</div>
                    {(nameDirty && nameError) && document.documentElement.style.setProperty("--nameBorderStyle", "1px solid red")}
                    {nameDirty && nameError && <div style={{color: 'red'}}>{nameError}</div>}
                    <input onChange={e => nameHandler(e, '--nameBorderStyle')} value={name} onBlur={e => blurhandler(e)} name='name' className='form__input name' type='text' placeholder='ФИО' />

                    <div className='form__label'>Адрес</div>
                    {(cityDirty && cityError) && document.documentElement.style.setProperty("--cityBorderStyle", "1px solid red")}
                    {cityDirty && cityError && <div style={{color: 'red'}}>{cityError}</div>}
                    <input onChange={e => cityHandler(e, '--cityBorderStyle')} value={city} onBlur={e => blurhandler(e)} name='city' className='form__input city' type='text' placeholder='Город' />

                    {(adressDirty && adressError) && document.documentElement.style.setProperty("--adressBorderStyle", "1px solid red")}
                    {adressDirty && adressError && <div style={{color: 'red'}}>{adressError}</div>}
                    <input onChange={e => adressHandler(e, '--adressBorderStyle')} value={adress} onBlur={e => blurhandler(e)}  name='adress' className='form__input adress' type='text' placeholder='Адрес' />

                    {(countryDirty && countryError) && document.documentElement.style.setProperty("--countryBorderStyle", "1px solid red")}
                    {countryDirty && countryError && <div style={{color: 'red'}}>{countryError}</div>}
                    {indexDirty && indexError && <div style={{color: 'red'}}>{indexError}</div>}
                    <div className='detail_info_section'>
                        <select onChange={e => countryHandler(e, '--countryBorderStyle')} value={country} onBlur={e => blurhandler(e)} name='country' className='form__select country'>
                            <option value='' disabled selected hidden>Страна</option>
                            <option value='Украина'>Украина</option>   
                            <option value='Россия'>Россия</option> 
                            <option value='Россия'>Беларусь</option>    
                        </select>

                        {(indexDirty && indexError) && document.documentElement.style.setProperty("--indexBorderStyle", "1px solid red")}
                        <input onChange={e => indexHandler(e, '--indexBorderStyle')} value={index} onBlur={e => blurhandler(e)} name='index' className='short_form__input index' type='text' placeholder='Индекс' />
                    </div>
                    {nameError || cityError || adressError || countryError || indexError ? <div onClick={setDirties} className='continue_button'><div className='button__label'>Продолжить</div></div> : <div className='button_link_size'><Link className='link' to='/payment'><div className='continue_button'><div className='button__label'>Продолжить</div></div></Link></div>}
                </div>
            </div>
        </div>
    );
}

export default Delivery;