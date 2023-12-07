import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import Add from '../ui/Add';
export default function PatientsComponents() {
    const dispatch = useDispatch();
    const PatientsSchedule = useSelector((state) => state.PatientsSchedule);
    const activeItem = useSelector((state) => state.activeItem)
    useEffect(() => {
        const a = [
            {
                id: 1,
                data: '1/02/2005',
                day: 'Понедельник',
                time: '12:00',
                doctor: 'Natalia N.A',
                type: 'Консультация',
            },
            {
                id: 2,
                data: '1/02/2005',
                day: 'Вторник',
                time: '13:00',
                doctor: 'Natalia N.A',
                type: 'Лечение',
            },
            {
                id: 3,
                data: '1/02/2005',
                day: 'Среда',
                time: '14:00',
                doctor: 'Natalia N.A',
                type: 'Консультация',
            },
            {
                id: 4,
                data: '1/02/2005',
                day: 'Вторник',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Консультация',
            },
            {
                id: 5,
                data: '1/02/2005',
                day: 'Вторник',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Консультация',
            },
            {
                id: 6,
                data: '1/02/2005',
                day: 'Вторник',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Консультация',
            },
            {
                id: 7,
                data: '1/02/2005',
                day: 'Пятница',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Консультация',
            },
            {
                id: 7,
                data: '1/02/2005',
                day: 'Суббота',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Консультация',
            },
            {
                id: 8,
                data: '1/02/2005',
                day: 'Суббота',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Снятие слепков',
            },
            {
                id: 9,
                data: '1/02/2005',
                day: 'Суббота',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Удаление',
            },
            {
                id: 10,
                data: '1/02/2005',
                day: 'Суббота',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Обработка',
            },
            {
                id: 11,
                data: '1/02/2005',
                day: 'Суббота',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Сдача протезов',
            },
            {
                id: 12,
                data: '1/02/2005',
                day: 'Суббота',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Сдача коронок',
            },
            {
                id: 13,
                data: '1/02/2005',
                day: 'Суббота',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Фиксация ЛКШВ',
            },
            {
                id: 14,
                data: '1/02/2005',
                day: 'Суббота',
                time: '13:00',
                doctor: 'Nikita N.A',
                type: 'Снятие ШТ.КОР',
            },
        ];
        dispatch({ type: 'SET_SCHEDULE', value: a });
    }, []);

    const groupedPatientsSchedule = PatientsSchedule.reduce((acc, item) => {
        const key = `${item.data}-${item.day}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
    const groupedScheduleArray = Object.values(groupedPatientsSchedule);
    const getDoctorTypeClass = (type) => {
        switch (type) {
            case 'Консультация':
                return 'Counseling';
            case 'Лечение':
                return 'Treatment';
            case 'Снятие слепков':
                return 'Blindfolds';
            case 'Снятие ШТ.КОР':
                return 'Blindfolds';
            case 'Удаление':
                return 'Treatment';
            case 'Сдача коронок':
                return 'Surrender';
            case 'Сдача протезов':
                return 'Surrender';
            case 'Обработка':
                return 'Other';
            case 'Фиксация ЛКШВ':
                return 'Other';
            default:
                return 'DefaultClass';
        }
    };
    return (
        <div className='Patients__container'>
            <div className="Patients__container-content">
                <div className="Patients__content-header">
                    <Menu>
                        <div className='Patients__header-item'>
                            <Link id="home" to={`/Расписание`} className="menu-item">Расписание</Link>
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
                    <div className="Add_patients">
                        <Add />
                    </div>
                </div>
                <div className="Patients__content-body">
                    <div className="Patients__body-content">
                        {groupedScheduleArray.map((group, index) => (
                            <div key={index} className="Patients__content-items">
                                {group.map((item, innerIndex) => {
                                    const currentDate = innerIndex === 0 ? `${item.day}, ${item.data}` : null;
                                    return (
                                        <div
                                            key={innerIndex}
                                            className={`Patients__content-item ${activeItem ? 'active' : ''}`}
                                        >
                                            {currentDate && (
                                                <div className='Patients__item-data'>
                                                    <p>{currentDate}</p>
                                                </div>
                                            )}
                                            <div className="Patients__item">
                                                <div className='Patients__item-description'>
                                                    <div className='Patients__description-time'>
                                                        <h3>{item.time}</h3>
                                                    </div>
                                                    <div className={`Patients__description-doctor ${getDoctorTypeClass(item.type)}`}>
                                                        <div className='Patients__doctor-type'>
                                                            <p>{item.type}</p>
                                                        </div>
                                                        <div className='Patients__doctor-name'>
                                                            <p>{item.doctor}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
