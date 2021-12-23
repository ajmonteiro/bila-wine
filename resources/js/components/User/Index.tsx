import React, { useState, useEffect } from 'react'
import { Content, Div } from '../Layout/Layout'
import Navbar from '../Layout/Navbar/Navbar'
import LastOrder from './LastOrder'
import UserData, { UpdatePwd } from './UserData';

export default function User() {
    const [dataVisible, setDataVisible] = useState<any>(false);
    const [contentVisible, setContentVisible] = useState<any>('default');
    return (
        <>
            <Navbar />
            <Div className="userpage-container">
                <Div className="userpage-grid">
                    <Div className="userpage-list-menu">
                        <h2 className='text-red-600 font-bold text-xl ml-3 cursor-pointer' onClick={() => setContentVisible('default')}>Área de cliente</h2>
                        <ul className="mt-10">
                            <Div>
                                <li>
                                    <Div>
                                        <i className="las la-shopping-bag"></i>
                                        <span className="userpage-list-item ml-5">As minhas encomendas</span>
                                    </Div>
                                    <i className="las la-angle-right"></i>
                                </li>
                                <li onClick={() => setDataVisible(!dataVisible)}>
                                    <Div>
                                        <i className="lar la-user"></i>
                                        <span className="userpage-list-item ml-5">Os meus dados</span>
                                    </Div>
                                    {dataVisible ? <i className="las la-angle-up"></i> : <i className="las la-angle-right"></i>}
                                </li>
                                {dataVisible == true &&
                                <Div className="sub-items">
                                    <ul>
                                        <li onClick={() => setContentVisible('userdata')}><span>Dados Pessoais</span></li>
                                        <li onClick={() => setContentVisible('pwd')}><span>Alterar Palavra-passe</span></li>
                                        <li><span>Moradas</span></li>
                                        <li><span>Preferências de Comunicação</span></li>
                                    </ul>
                                </Div>}
                                <li>
                                    <Div>
                                        <i className="lar la-heart"></i>
                                        <span className="userpage-list-item ml-5">Os meus favoritos</span>
                                    </Div>
                                    <i className="las la-angle-right"></i>
                                </li>
                            </Div>
                            <Div className="userpage-session">
                            <li>
                                <Div>
                                    <i className="las la-door-open"></i>
                                    <span className="userpage-list-item ml-5">Terminar sessão</span>
                                </Div>
                                <i className="las la-angle-right"></i>
                            </li>
                            </Div>
                        </ul>
                    </Div>
                    <Div className="user-d-container">
                        {contentVisible == 'default' && <LastOrder />}
                        {contentVisible == 'userdata' && <UserData />}
                        {contentVisible == 'pwd' && <UpdatePwd />}
                    </Div>
                </Div>
            </Div>
        </>
    )
}