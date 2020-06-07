import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function profile() {
    const ongName = localStorage.getItem('ongName');

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"></img>
                <span>Bem Vinda, { ongName } </span>

            <Link className="button" to="/incidents/new">Cadastrar novo Caso</Link>
                <button type="button">
                 <FiPower size={19} color="#E02041"></FiPower>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>   
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>   
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>   
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRICAO:</strong>
                    <p>Descricao teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>   
                    </button>
                </li>
            </ul>
        </div>

    );
}