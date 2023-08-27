import IconSwitch from './IconSwitch';
import products from './products.data';
import ListView from './ListView';
import CardsView from './CardsView';
import './Store.module.css';
import { useState } from "react";


const Store = () => {
    const [viewState, setViewState] = useState('view_list')

    if (viewState === 'view_list') {
        return (
            <div>
                <IconSwitch icon={viewState} onSwitch={() => {
                    setViewState('view_module');
                }} />
                <ListView items={products}/>
            </div>
        );
    } else {
        return (
            <div>
                <IconSwitch icon={viewState} onSwitch={() => {
                    setViewState('view_list');
                }} />
                <CardsView cards={products}/>
            </div>
        );
    };
};


export default Store;
