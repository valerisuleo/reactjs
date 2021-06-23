import logo from './logo.svg';
import './App.css';
import { Trans, useTranslation } from 'react-i18next';

function App() {

    const { t, i18n } = useTranslation();
    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng);
    // }

    console.log('i18n');

    return (
        <div className="App">
            {/* <button onClick={() => changeLanguage('it')}>ita</button> */}
            {/* <button onClick={() => changeLanguage('en')}>uk</button> */}
            {/* <Trans i18nKey="description.part1"></Trans> */}

            <hr />

            <div>
                {t('description.part2')}
            </div>
        </div>
    );
}

export default App;
