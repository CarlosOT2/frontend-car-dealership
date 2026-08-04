//# Components //
import Img from '../global/img'
import Text from '../global/text'
import Input from '../global/inputs/input'
import Select from '../global/inputs/select'
import Button from '../global/button'
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
                            <Select
                                name='make'
                                className='search__section-form__input--select'
                                InputsController={InputsController}
                                label={t('search.form.make')}
                            />
                            <Select
                                name='model'
                                className='search__section-form__input--select'
                                InputsController={InputsController}
                                label={t('search.form.model')}
                            />
                            <Select
                                name='variant'
                                className='search__section-form__input--select'
                                InputsController={InputsController}
                                label={t('search.form.variant')}
                            />
                            <Input
                                type='number'
                                name='Year'
                                className='search__section-form__input'
                                InputsController={InputsController}
                            />
                            <Button
                                type={'submit'}
                                className='search__section-form__button'
                            >
                                <Text tag='span' className='search__section-form__button-text'>
                                    {t('search.form.search')}
                                </Text>
                            </Button>
                        </form>
                    </div>
                </section>
            </div >
        </section >
    )
}