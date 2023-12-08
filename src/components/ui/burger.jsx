import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
export default function burger() {
    return (
        <div>
            <Menu>
                <div className='Patients__header-item'>
                    <Link id="home" to={`/schedula`} className="menu-item">Расписание</Link>
                </div>
                <div className='Patients__header-item'>
                    <Link id="about" to={`/Никита`} className="menu-item">Никита</Link>
                </div>
                <div className='Patients__header-item'>
                    <Link id="contact" to={`/Антоха`} className="menu-item">Антоха</Link>
                </div>
                <div className='Patients__header-item'>
                    <Link className="menu-item" to={`/Витек`}>Витек</Link>
                </div>
            </Menu>
        </div>
    )
}
