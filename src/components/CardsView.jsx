import Card from './ShopCard';
import styles from './CardsView.module.css';

const CardsView = (products) => {
    let keyId = 0;

    return (
        <div className={styles.page}>
            {products.cards.map((el) => {
                keyId++;
                return <Card el={el} key={keyId}/>
            })}
        </div>
    );
};

export default CardsView;