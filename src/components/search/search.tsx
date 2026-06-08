//# Components //
import Img from '../global/img'
import Text from '../global/text'
//# Libs //
import { useTranslation } from 'react-i18next'
//# Classes //
import './search.scss'

export default function Search() {
    const { t } = useTranslation()

    return (
        <section className='search'>
            <div className='search__content'>
                <section className='search__section-hero'>
                    <Img src="../public/img/searchbg.webp" className="search__section-hero__bg" noSelect={true} />
                    <div className="search__section-hero__right-shadow" aria-hidden={true}></div>
                    <Text tag="h1" className="search__section-hero__title">
                        {t('search.hero.title')}
                    </Text>

                </section>
                <section className='search__section-form'>
                    <div className='search__section-form__content'>
                        <nav className='search__section-form__tabs'>
                            <ul className='search__section-form__tabs-list'>
                                <li className='search__section-form__tabs-item'>
                                    <Text tag='span' className='search__section-form__tabs-text'>
                                        Veículos Novos
                                    </Text>
                                </li>
                                <li className='search__section-form__tabs-item'>
                                    <Text tag='span' className='search__section-form__tabs-text'>
                                        Veículos Semi-Novos
                                    </Text>
                                </li>
                                <li className='search__section-form__tabs-item'>
                                    <Text tag='span' className='search__section-form__tabs-text'>
                                        Acessórios
                                    </Text>
                                </li>
                            </ul>
                        </nav>

                        <form className='search__section-form__form'>

                        </form>
                    </div>

                </section>
            </div >
        </section >
    )
}