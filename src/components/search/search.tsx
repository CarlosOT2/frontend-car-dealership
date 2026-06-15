//# Components //
import Img from '../global/img'
import Text from '../global/text'
import Input from '../global/inputs/input'
//# Libs //
import { useTranslation } from 'react-i18next'
//# Utils //
import { useFormController } from '../../shared/form/FormController'
//# Classes //
import './search.scss'

export default function Search() {
    const { InputsController, SubmitController } = useFormController({
        handleSubmit: handleSubmit
    })
    const { t } = useTranslation()

    async function handleSubmit() {

    }

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
                                    <Text tag='span' className='search__section-form__tabs-text' no_select={true}>
                                        Veículos Novos
                                    </Text>
                                </li>
                                <li className='search__section-form__tabs-item'>
                                    <Text tag='span' className='search__section-form__tabs-text' no_select={true}>
                                        Veículos Semi-Novos
                                    </Text>
                                </li>
                                <li className='search__section-form__tabs-item'>
                                    <Text tag='span' className='search__section-form__tabs-text' no_select={true}>
                                        Acessórios
                                    </Text>
                                </li>
                            </ul>
                        </nav>

                        <form
                            className='search__section-form__form'
                            onSubmit={SubmitController.onSubmit}
                        >
                            <Input
                                type='text'
                                name='teste'
                                autoComplete='off'
                                InputsController={InputsController}
                            />
                        </form>
                    </div>
                </section>
            </div >
        </section >
    )
}