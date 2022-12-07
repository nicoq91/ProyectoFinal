import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Formulario.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("xvoyzvow");
    if (state.succeeded) {
        return <h3><p>Gracias por dejarnos tu mensaje nuestros asesores se pondran en contacto </p></h3>;
    }
    return (
        <div className='ContenedorFormulario1'>
            <form onSubmit={handleSubmit} className='formulario1' >

                <label htmlFor="email" >
                    Email:
                </label>
                <input
                    className='inputFormulario'
                    type="email"
                    name="email"
                    placeholder=' Escribe tu correo '
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="nombre" >
                    Nombre:
                </label>
                <input
                    className='inputFormulario'
                    type="text"
                    name="nombre"
                    placeholder=' Escribe tu nombre  '
                />
                <ValidationError
                    prefix="Text"
                    field="nombre"
                    errors={state.errors}
                />
                <label htmlFor="Apellido" >
                    Apellido:
                </label>
                <input
                    className='inputFormulario'
                    type="text"
                    name="Apellido"
                    placeholder='   Escribe tu Apellido  '
                />
                <ValidationError
                    prefix="Text"
                    field="Apellido"
                    errors={state.errors}
                />
                <textarea
                    className='inputFormulario'
                    name="message"
                    placeholder=' Dejanos tu mensaje o consulta'

                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className='BotonDeEnvio'>
                    Enviar
                </button>

            </form>
        </div>
    );
}
export default ContactForm;