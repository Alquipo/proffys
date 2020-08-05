import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">

            <header>
                <img src="https://avatars2.githubusercontent.com/u/58523339?s=460&u=5bba39ceab3329cfff6c86b2d3dfdcd5f944c4c0&v=4" alt=""/>
                <div>
                    <strong>Alquipo Neto</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de quimica avançada
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atrave´s de experiencia
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem
